# Instagram photo sync

The homepage carousel shows your latest Instagram photos. Every day at 6am Eastern
(and on every push to `main`), the deploy workflow runs `scripts/sync-instagram.mjs`,
downloads your newest photos, and rebuilds the site. If Instagram can't be reached
or no token is set, the carousel falls back to the photos in `public/images/`.

Videos are skipped. For multi-photo posts, the first photo is used.

## One-time setup

### 1. Make your Instagram a professional account
Instagram app → Settings → **Account type and tools** → **Switch to professional account**
(Creator or Business). It's free, and your posts and followers stay the same.

### 2. Get an access token from Meta
1. Go to <https://developers.facebook.com/apps> and click **Create app**.
2. Pick the Instagram use case (shown as "Manage messaging & content on Instagram"
   or similar).
3. In the app dashboard, open **Instagram → API setup with Instagram login**.
4. Under **Generate access tokens**, click **Add account**, sign in to your
   Instagram, then click **Generate token**. Copy the token.

You can leave the app in development mode, since it only reads your own account.
Meta renames these menus occasionally, so the wording may differ slightly.

### 3. Add the token to GitHub
Repo → **Settings → Secrets and variables → Actions → New repository secret**
- Name: `INSTAGRAM_TOKEN`
- Value: the token from step 2

### 4. (Optional) Choose which posts appear
In the same place, open the **Variables** tab and add:
- `INSTAGRAM_HASHTAG`: only show posts with this tag in the caption, e.g. `#pittsford`.
  Leave it unset to show your most recent photos.
- `INSTAGRAM_LIMIT`: how many photos to show (default `6`).

### 5. (Optional) Keep the token from expiring
Instagram tokens expire after 60 days. The workflow refreshes the token on every
run, but it needs permission to save the new one:
1. GitHub → your profile → **Settings → Developer settings → Fine-grained tokens →
   Generate new token**.
2. Repository access: only `campaign-website`. Permissions: **Secrets → Read and write**.
3. Add it as a repository secret named `SECRETS_ADMIN_TOKEN`.

Without this, you'll need to repeat steps 2–3 every 60 days. The site keeps
working in the meantime, but it falls back to the built-in photos once the token expires.

### 6. Run it
Repo → **Actions → Deploy to GitHub Pages → Run workflow**. The log for the
"Sync Instagram photos" step should say `Synced N Instagram photo(s).`
