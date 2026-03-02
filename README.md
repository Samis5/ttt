# Tic-Tac-Toe (JavaScript)

A simple browser-based Tic-Tac-Toe game built with plain HTML, CSS, and JavaScript.

## Play locally

Open `index.html` directly in your browser, or run a static server:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000>.

## Publish to GitHub Pages

This repository includes `.github/workflows/deploy-pages.yml` that deploys the repository root to GitHub Pages whenever changes are pushed to `main`.

1. Push this repo to GitHub.
2. In GitHub, go to **Settings → Pages**.
3. Under **Build and deployment**, choose **Source: GitHub Actions**.
4. Push to `main` and the workflow will publish the site.
