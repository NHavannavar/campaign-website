# Naveen Havannavar Campaign Website

A professional React-based campaign website for Pittsford Town Board Member Naveen Havannavar.

## 🚀 Quick Start - Deploy to Netlify (Easiest)

### Option 1: Drag & Drop (Recommended for beginners)

1. **Install dependencies and build:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy to Netlify:**
   - Go to [netlify.com](https://www.netlify.com) and sign up (free)
   - Click "Add new site" → "Deploy manually"
   - Drag the `dist` folder to the upload area
   - Done! Your site is live!

3. **Optional - Add custom domain:**
   - In Netlify dashboard, go to "Domain settings"
   - Add your custom domain (e.g., naveenforpittsford.com)
   - Follow their DNS instructions

### Option 2: GitHub + Netlify (Auto-deploy on changes)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [netlify.com](https://www.netlify.com)
   - Click "Add new site" → "Import from Git"
   - Connect your GitHub account
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

Now every time you push changes to GitHub, Netlify will automatically rebuild and deploy!

## 🌐 Other Hosting Options

### Vercel
```bash
npm install -g vercel
vercel
```

### GitHub Pages
1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/naveen-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update vite.config.js:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/naveen-website/'
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

### Cloudflare Pages
1. Push code to GitHub
2. Go to [Cloudflare Pages](https://pages.cloudflare.com)
3. Connect GitHub repo
4. Build settings:
   - Build command: `npm run build`
   - Build output: `dist`

## 🛠️ Development

Run locally:
```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.

## 📝 Customization

### Photos
Photos live in `public/images/` and are placed by name in `src/App.jsx`:
- `town-hall.jpg`: top of the page (portrait works best)
- `residents.jpeg`: About section, next to the bio
- `community.jpg`: wide photo between Priorities and About
- `meeting.jpg`: Town Board section

To swap one, upload a new photo with the same filename. Keep each under about 1600px on the long edge so the page loads quickly on phones.

### Update Content
Edit `src/App.jsx` to modify:
- Text content
- Social media links
- Contact information
- Priorities and achievements

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## 📦 Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

## 🆘 Troubleshooting

### Build fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Site looks broken after deploy
- Make sure you deployed the `dist` folder, not the root folder
- Check that the base URL is correct in vite.config.js

## 📞 Support

For issues or questions about deployment, refer to:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [Vite Docs](https://vitejs.dev)

---

**Paid for by Friends of Naveen Havannavar for Pittsford**
