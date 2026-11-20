# Shripad Balang - Portfolio Website

Personal portfolio website for **Shripad Balang**, hosted on Cloudflare Pages at [balangshripad.dev](https://balangshripad.dev).

## Architecture

- **Stack**: Vite, HTML5, modern lightweight CSS, JavaScript.
- **Hosting**: Cloudflare Pages connected to GitHub repository `shripadbalang/portfolio-web`.
- **Custom Domains**: `balangshripad.dev` and `www.balangshripad.dev`.
- **Live Project Link**: `traffic.balangshripad.dev`.

## Resume Management (`/resume.pdf`)

The canonical source of truth for your resume is:
```
docs/Shripad_Balang_Resume.pdf
```

### How to update your resume:
1. Replace or update the file `docs/Shripad_Balang_Resume.pdf`.
2. Commit and push your changes to GitHub:
   ```bash
   git add docs/Shripad_Balang_Resume.pdf
   git commit -m "Update resume"
   git push origin main
   ```
3. Cloudflare Pages automatically runs the pre-build sync script (`scripts/sync-resume.mjs`), builds the site, and deploys the updated PDF to:
   ```
   https://balangshripad.dev/resume.pdf
   ```
   It is served directly inline in browser PDF viewers.

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server (automatically syncs resume)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```
