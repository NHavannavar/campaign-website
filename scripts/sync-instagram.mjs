// Pulls recent Instagram photos into public/images/instagram/ and writes
// src/instagram.json for the homepage carousel. Runs in the deploy workflow
// before `vite build`. If anything goes wrong it writes an empty list so the
// site falls back to the photos in public/images/.
//
// Env:
//   INSTAGRAM_TOKEN    long-lived Instagram API token (required to sync)
//   INSTAGRAM_HASHTAG  only use posts whose caption contains this tag (optional, e.g. "#pittsford")
//   INSTAGRAM_LIMIT    how many photos to show (default 6)
//   REFRESHED_TOKEN_FILE  if set, a refreshed token is written here so the workflow can save it

import { mkdir, rm, writeFile } from 'node:fs/promises';

const API = 'https://graph.instagram.com';
const OUT_DIR = 'public/images/instagram';
const MANIFEST = 'src/instagram.json';

const token = process.env.INSTAGRAM_TOKEN;
const hashtag = (process.env.INSTAGRAM_HASHTAG || '').trim().toLowerCase();
const limit = Number(process.env.INSTAGRAM_LIMIT) || 6;

async function getJson(url) {
  const res = await fetch(url);
  const body = await res.json();
  if (!res.ok || body.error) throw new Error(body.error?.message || `HTTP ${res.status}`);
  return body;
}

async function fetchPosts() {
  const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
  let url = `${API}/me/media?fields=${fields}&limit=50&access_token=${token}`;
  const picked = [];
  // Page through until we have enough matching photos (cap at 4 pages).
  for (let page = 0; url && page < 4 && picked.length < limit; page++) {
    const { data, paging } = await getJson(url);
    for (const post of data) {
      if (post.media_type === 'VIDEO') continue;
      if (hashtag && !(post.caption || '').toLowerCase().includes(hashtag)) continue;
      picked.push(post);
      if (picked.length === limit) break;
    }
    url = paging?.next;
  }
  return picked;
}

async function refreshToken() {
  const file = process.env.REFRESHED_TOKEN_FILE;
  if (!file) return;
  try {
    const { access_token } = await getJson(
      `${API}/refresh_access_token?grant_type=ig_refresh_token&access_token=${token}`
    );
    if (access_token) await writeFile(file, access_token);
  } catch (err) {
    console.warn(`Token refresh skipped: ${err.message}`);
  }
}

async function main() {
  await rm(OUT_DIR, { recursive: true, force: true });
  await mkdir(OUT_DIR, { recursive: true });

  if (!token) {
    console.log('INSTAGRAM_TOKEN not set; using built-in photos.');
    await writeFile(MANIFEST, '[]\n');
    return;
  }

  try {
    const posts = await fetchPosts();
    const items = [];
    for (const post of posts) {
      const res = await fetch(post.media_url);
      if (!res.ok) continue;
      const file = `${post.id}.jpg`;
      await writeFile(`${OUT_DIR}/${file}`, Buffer.from(await res.arrayBuffer()));
      const caption = (post.caption || '').split('\n')[0].slice(0, 120);
      items.push({ file, alt: caption || 'Photo from Instagram', permalink: post.permalink });
    }
    await writeFile(MANIFEST, JSON.stringify(items, null, 2) + '\n');
    console.log(`Synced ${items.length} Instagram photo(s).`);
  } catch (err) {
    console.warn(`Instagram sync failed (${err.message}); using built-in photos.`);
    await writeFile(MANIFEST, '[]\n');
  }

  await refreshToken();
}

main();
