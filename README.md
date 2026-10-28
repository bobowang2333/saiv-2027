# SAIV 2027

A responsive, accessible, static nine-page conference website, visually inspired by https://conferences.i-cav.org/2027/. Original implementation and London SVG illustration; no copied CAV assets or third-party runtime dependencies.

## Publish on GitHub Pages

1. Create or select the intended GitHub repository. Add the contents of this folder to its `main` branch, including `.github/workflows/pages.yml`.
2. Open repository **Settings → Pages** and select **GitHub Actions** as the build and deployment source.
3. Push to `main`, or run **Actions → Deploy SAIV 2027 to GitHub Pages → Run workflow**.
4. GitHub supplies the live URL in the successful deployment. All assets and page links are relative, supporting both `username.github.io` and `username.github.io/repository/`.

Alternatively, the committed HTML and assets can be deployed directly using Pages' **Deploy from a branch**, branch `main`, folder `/ (root)`. The `.nojekyll` file disables Jekyll processing.

## Edit

Edit content, navigation, and dates in `build.py`, then run `python3 build.py`. The GitHub Actions workflow regenerates the pages automatically. Visual styles are in `assets/style.css`; the mobile menu is in `assets/site.js`. No packages are required. To inspect locally, open `index.html` in a browser.

## Editorial choices

- Ravi's revised Subject Areas replace the preceding alternative draft.
- “Organation” is corrected to “Organization”.
- Empty pages, committee entries, and the Research Highlights details remain explicitly unannounced.
- The overall October 31–November 5 dates and November 2–3 main conference dates are distinct.
- No invented submission portal, registration form, venue, committee members, or contact email.

The `.openai` folder is only local preview configuration and is not needed for GitHub Pages.
