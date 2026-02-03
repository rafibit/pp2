# PhD Profile Portal (Light Theme)

## Quick start
```bash
npm install
npm run dev
```

## Add your photo
Replace: `public/assets/profile.jpg`

## Edit content
Edit: `src/data/profile.ts`

## Deploy (GitHub Pages)
1. Create a new GitHub repository (public).
2. Upload this project (all files/folders).
3. Edit `vite.config.ts`:
   - If your repo is named `myprofile`, set `base: '/myprofile/'`
4. Repo → Settings → Pages → Source: **GitHub Actions**
5. Push/commit changes to `main` → your site deploys.
