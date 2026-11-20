# Campaign website: guidance for Claude Code

This repo is **only** the campaign site for Naveen Havannavar, live at https://naveenforpittsford.com.
It is paid for by **Friends of Naveen Havannavar for Pittsford** and is written for **Pittsford voters**.

His professional (recruiter-facing) site is a **separate repo and domain** (naveenhavannavar.com).
Do not add job-search, recruiter or career-marketing content here, and do not copy campaign
content or assets into the professional site from this repo. Campaign funds can't pay for personal
promotion, and keeping the two apart avoids that.

## Hosting and publishing

- Cloudflare Workers static assets. Settings are in `wrangler.jsonc`, which serves `dist/`.
- Every merge to `main` builds (`npm run build`) and deploys (`npx wrangler deploy`) automatically, live in about 1–2 minutes.
- The domain is registered at Squarespace Domains; DNS is in Cloudflare. GitHub Pages is retired.
- Bing Webmaster Tools is verified with `public/BingSiteAuth.xml`. Don't remove it.

## Build: keep prerendering working

`npm run build` runs `vite build`, then an SSR build of `src/entry-server.jsx`, then
`scripts/prerender.mjs`, which writes the full page HTML into `dist/index.html`. AI crawlers and
search engines that don't run JavaScript depend on this. `src/main.jsx` hydrates when HTML is
present. After changes, confirm the build prints `prerender: wrote full page HTML` and the page
has no hydration warnings in the browser console. Avoid browser-only code (`window`, `document`)
during render.

Also keep these working:
- `index.html`: Open Graph/Twitter share tags, `share.jpg`, Person JSON-LD
- `public/robots.txt`, `public/sitemap.xml`, `public/llms.txt`. Update `llms.txt` when the record changes.

## Design system (don't drift)

- Colors are CSS variables in `src/index.css`: navy `--ink`, cream `--paper`, red `--red`.
  **Red is reserved for Donate** and small accents (labels, the "Continuing" column).
- Fonts: Libre Caslon Display/Text for headings, Public Sans for body. No Inter, Roboto or system fonts.
- Lucide line icons only; no emoji as icons.
- Flat, editorial layout: hairline rules and generous whitespace. No gradients-on-everything, no
  card grids in many colors. It should never look AI-generated or template-like.
- Must work at 390px phone width with no horizontal scroll. Check desktop and phone screenshots before shipping.
- Accessibility: keep 0 issues in an axe audit (WCAG 2.1 AA) and visible keyboard focus.

## Content rules

- **Use only facts Naveen has provided.** Never invent accomplishments, numbers, quotes or endorsements.
  If something is unclear, ask.
- Title line: "Deputy Supervisor · Town Board Member", with "Pittsford, New York" on its own line.
- Elected November 2023, serving since January 2024. On the ballot **Tuesday, November 2, 2027**.
- Has lived in Pittsford since 2018, with his wife Kate and children Neel and Leela (Park Road Elementary).
- Record items in `RECORD` (in `src/App.jsx`) are `true` = **Done** and `false` = **Pushing for**.
  Mark something Done only when Naveen says it's done.
- Commitments table columns: "Promised in 2023 / Kept / **Continuing**" (not "Coming up").
- Career line: **no hard numbers** (no employee counts or budgets). Forty Under 40 has **no year**.
- Spelling: "WXXI/Little Theatre"; "Coalition for Asian American Children and Families".
- Keep campaign and official channels separate:
  - Social links are the **campaign** accounts (NaveenForPittsford). Never link the official
    Town account (@councilman_naveen) or the Town's official contact form.
  - Contact, volunteer and newsletter links are the campaign Google Forms in `LINKS`.
- Keep the footer disclaimer: "Paid for by Friends of Naveen Havannavar for Pittsford".
- Photos live in `public/images/`, under 1600px on the long edge.

## Workflow

- Work on a branch and open a PR. **Merge only when Naveen says to**, using a regular merge, not squash.
- After merging, confirm the change is live on naveenforpittsford.com before reporting it done.
- Explain changes in plain language. Naveen isn't a developer.

## Open items

- Switch photos to WebP (about half the size). Offered; waiting for Naveen's go-ahead.
- Once the 2027 office is confirmed, change "On the ballot" to a clear ask (e.g. "Re-elect Naveen to the Pittsford Town Board").
- Endorsements and resident quotes, as they come in.
- Fall 2027: early voting dates, absentee deadlines and a polling-place lookup link.
- Google Search Console setup, if not done yet.
