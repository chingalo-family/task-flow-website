# GitHub Pages Deployment Guide

This guide explains how to deploy the Task Flow website to GitHub Pages.

## Deployment Options

### Option 1: Automatic Deployment with GitHub Actions (Recommended)

The repository includes a GitHub Actions workflow that automatically deploys the website when changes are pushed to the `main` branch.

**Setup Steps:**

1. **Enable GitHub Pages in Repository Settings:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Merge this PR to main:**
   - Once this pull request is merged to `main`, the workflow will automatically run
   - The website will be deployed to: `https://chingalo-family.github.io/task-flow-website/`

3. **Monitor Deployment:**
   - Go to the **Actions** tab in your repository
   - You'll see the "Deploy to GitHub Pages" workflow running
   - Once completed, your site will be live!

### Option 2: Manual Deployment from Docs Folder

If you prefer manual deployment without GitHub Actions:

**Setup Steps:**

1. **Configure GitHub Pages:**
   - Go to **Settings** → **Pages**
   - Under **Source**, select **Deploy from a branch**
   - Choose **main** branch
   - Select **/docs** folder
   - Click **Save**

2. **Website URL:**
   - Your site will be available at: `https://chingalo-family.github.io/task-flow-website/`
   - It may take a few minutes for the initial deployment

## Verifying Deployment

After deployment, verify the following:

- [ ] Website is accessible at the GitHub Pages URL
- [ ] All pages/sections are working (Home, Features, Download, About)
- [ ] Navigation works correctly
- [ ] Mobile menu opens/closes properly
- [ ] All links are functional
- [ ] Images and icons load correctly
- [ ] Responsive design works on different screen sizes

## Custom Domain (Optional)

If you want to use a custom domain:

1. **Add CNAME file:**
   ```bash
   echo "your-domain.com" > docs/CNAME
   ```

2. **Configure DNS:**
   - Add a CNAME record pointing to `chingalo-family.github.io`
   - Or use A records for apex domain

3. **Update in GitHub Settings:**
   - Go to **Settings** → **Pages**
   - Enter your custom domain
   - Enable **Enforce HTTPS**

## Troubleshooting

### Website not loading
- Check if GitHub Pages is enabled in settings
- Ensure the `/docs` folder exists in the `main` branch
- Wait 5-10 minutes after first deployment

### CSS/JS not loading
- Check browser console for errors
- Verify all paths are relative (not absolute)
- Clear browser cache

### 404 errors
- Ensure `index.html` exists in the `/docs` folder
- Check that `.nojekyll` file is present

## Updating the Website

To update the website:

1. Make changes to files in the `/docs` folder
2. Commit and push to a branch
3. Create a pull request
4. Merge to `main` (triggers automatic deployment)

## Performance Optimization

The website is already optimized with:
- ✅ Minified CSS
- ✅ External CDN resources (fonts, icons)
- ✅ Lazy loading for images
- ✅ Responsive images
- ✅ SEO meta tags
- ✅ Sitemap.xml and robots.txt

## Security

- ✅ HTTPS enforced via GitHub Pages
- ✅ No sensitive data exposed
- ✅ External links use rel="noopener noreferrer"
- ✅ Accessibility compliant (WCAG 2.1 AA)

## Support

For issues or questions:
- Check GitHub Issues
- Review the website specification (WEBSITE_SPECIFICATION.md)
- Contact the Task Flow Development Team

---

**Last Updated:** 2025-01-05  
**Deployment Status:** Ready for deployment
