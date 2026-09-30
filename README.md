# Web Interface Projects

This repository contains ten independent web projects and a shared project index. GitHub Pages publishes the index at the repository root and each app under `projects/project-N/`.

## Build for GitHub Pages

With Node.js 22 installed, run this from the repository root:

```sh
node scripts/build-pages.mjs
```
🚀 Live Project

This repository contains my collection of 10 web development projects, built using technologies such as HTML, CSS, JavaScript, React, and Vite. The projects demonstrate my practical skills in frontend development, responsive UI design, React applications, and interactive web experiences. All projects are organized and accessible through a single public deployment for easy viewing and exploration.

🔗 Live Website: https://webinterface-teal.vercel.app/#projects

You can explore all my projects, view their individual features, and see my progress in web development and modern frontend technologies.

The script runs `npm ci` and `npm run build -- --base ./` for each React/Vite project, then stages all ten projects in `dist/`. The two HTML/CSS/JavaScript projects are copied without modifying their source. The `dist/` folder is generated output and should not be committed.

## Deployment

The GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys the site to GitHub Pages whenever `main` is updated. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. No environment variables are required.

React apps with multiple pages use hash-based URLs so navigation and refresh work on static hosting.

### Vercel

The root `vercel.json` configures one Vercel project for the full collection. From the repository root, run `vercel`; use the repository root (`./`) as the project directory. Vercel runs `node scripts/build-pages.mjs` and serves `dist/`. The build script includes the tracked projects only and excludes nested copies. No environment variables or separate project deployments are required.
