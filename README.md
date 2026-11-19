# Naveen Havannavar Campaign Website

Campaign site for Naveen Havannavar, Deputy Supervisor and Pittsford Town Board member.
Live at **https://naveenforpittsford.com**.

## How it's published

The site is hosted on Cloudflare (Workers static assets). Every change merged into `main`
is built and published automatically:

- Build command: `npm run build`
- Deploy command: `npx wrangler deploy` (settings in `wrangler.jsonc`, which serves the `dist` folder)

The domain is registered at Squarespace Domains and its DNS is managed in Cloudflare.

## Editing content

All text lives in `src/App.jsx`. Most of it is in lists near the top of the file:

- `HIGHLIGHTS`: the three big results in the Record section
- `RECORD`: the record by topic; `true` marks an item **Done**, `false` marks it **Pushing for**
- `TOWN_CODE`: the Town Code update list
- `COMMITMENTS`: the Made / Kept / Continuing table
- `CREDENTIALS`: the About section credentials
- `LINKS`: donate, Google Forms and social media links

Wrap words in `**double asterisks**` to make them bold.

## Photos

Photos live in `public/images/` and are placed by name in `src/App.jsx`:

- `town-hall.jpg`: top of the page
- `residents.jpeg`: About section, next to the bio
- `community.jpg`: veterans photo between the Record and Commitments sections
- `meeting.jpg`: Community part of the Record section

To swap one, upload a new photo with the same filename. Keep each under about 1600px on the
long edge so the page loads quickly on phones.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Tech

React, Vite, Tailwind CSS and Lucide icons. Fonts: Libre Caslon and Public Sans (Google Fonts).

---

**Paid for by Friends of Naveen Havannavar for Pittsford**
