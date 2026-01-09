# Maintenance Guide

This guide provides information for maintaining the Task Flow website, including common tasks, troubleshooting, and best practices.

## Table of Contents

- [Regular Maintenance Tasks](#regular-maintenance-tasks)
- [Content Updates](#content-updates)
- [Dependency Updates](#dependency-updates)
- [Performance Monitoring](#performance-monitoring)
- [Troubleshooting](#troubleshooting)
- [Backup and Recovery](#backup-and-recovery)
- [Security Updates](#security-updates)
- [Best Practices](#best-practices)

## Regular Maintenance Tasks

### Weekly Tasks

- [ ] Check GitHub Pages deployment status
- [ ] Review any new issues or pull requests
- [ ] Monitor website performance with Lighthouse
- [ ] Check for broken links
- [ ] Review analytics (if enabled)

### Monthly Tasks

- [ ] Update external library versions (Font Awesome, AOS)
- [ ] Review and update content as needed
- [ ] Test website on latest browser versions
- [ ] Optimize and compress new images
- [ ] Review security advisories
- [ ] Update documentation if needed

### Quarterly Tasks

- [ ] Comprehensive accessibility audit
- [ ] SEO audit and optimization
- [ ] Performance optimization review
- [ ] Review and update screenshots
- [ ] Conduct user testing
- [ ] Review and update all documentation

## Content Updates

### Updating Text Content

#### Homepage Content

Edit `docs/index.html`:

```html
<!-- Update hero section -->
<h1 class="hero-title">Task Flow</h1>
<h2 class="hero-subtitle">Collaborate and Achieve</h2>
<p class="hero-description">
    Your updated description here...
</p>
```

#### Feature Descriptions

Locate the features section in `docs/index.html`:

```html
<section class="features section" id="features">
    <!-- Update feature cards -->
    <div class="feature-card">
        <i class="fas fa-tasks"></i>
        <h3>Feature Title</h3>
        <p>Updated feature description...</p>
    </div>
</section>
```

### Adding New Screenshots

1. **Capture Screenshots**
   - Use the Task Flow mobile app
   - Follow naming convention: `feature-name.png`

2. **Optimize Images**
   ```bash
   # Using TinyPNG
   npx tinypng-cli docs/images/screenshots/**/*.png
   
   # Or using ImageOptim (Mac)
   imageoptim docs/images/screenshots/
   ```

3. **Place in Correct Directory**
   ```
   docs/images/screenshots/
   ├── android/
   │   ├── phone/
   │   │   └── new-feature.png
   │   └── tablet/
   └── ios/
       ├── iphone/
       └── ipad/
   ```

4. **Update HTML References**
   ```html
   <img src="images/screenshots/android/phone/new-feature.png" 
        alt="Descriptive alt text"
        loading="lazy">
   ```

### Updating Download Links

Edit the download section in `docs/index.html`:

```html
<section class="download section" id="download">
    <!-- Update Android link -->
    <a href="https://play.google.com/store/apps/details?id=com.taskflow" 
       class="download-button android"
       target="_blank" 
       rel="noopener noreferrer">
        <i class="fab fa-google-play"></i>
        Download for Android
    </a>
    
    <!-- Update iOS link -->
    <a href="https://apps.apple.com/app/task-flow/id123456789" 
       class="download-button ios"
       target="_blank" 
       rel="noopener noreferrer">
        <i class="fab fa-app-store-ios"></i>
        Download for iOS
    </a>
</section>
```

### Updating Meta Tags (SEO)

Edit meta tags in `docs/index.html`:

```html
<head>
    <!-- Update title -->
    <title>Task Flow - Collaborate and Achieve</title>
    
    <!-- Update description -->
    <meta name="description" content="Your updated description...">
    
    <!-- Update keywords -->
    <meta name="keywords" content="task management, team collaboration, productivity">
    
    <!-- Update Open Graph tags -->
    <meta property="og:title" content="Task Flow - Collaborate and Achieve">
    <meta property="og:description" content="Your updated description...">
</head>
```

## Dependency Updates

### External Libraries

The website uses CDN-hosted libraries. Update versions as needed:

#### Google Fonts

Current version in `docs/index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

To update or add fonts, visit [Google Fonts](https://fonts.google.com/).

#### Font Awesome

Current version: 6.4.0

To update:
1. Check latest version at [Font Awesome](https://fontawesome.com/)
2. Update CDN link in `docs/index.html`:
   ```html
   <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
   ```

#### AOS (Animate On Scroll)

Current version: 2.3.1

To update:
1. Check latest version at [AOS GitHub](https://github.com/michalsnik/aos)
2. Update CDN links in `docs/index.html`:
   ```html
   <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css">
   <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
   ```

### Testing After Updates

After updating dependencies:

1. **Visual Testing** - Check all pages load correctly
2. **Functionality Testing** - Verify animations and interactions work
3. **Browser Testing** - Test in Chrome, Firefox, Safari, Edge
4. **Mobile Testing** - Test on actual mobile devices
5. **Console Check** - Ensure no JavaScript errors

## Performance Monitoring

### Using Google Lighthouse

Run regular Lighthouse audits:

1. Open website in Chrome
2. Open DevTools (F12)
3. Go to "Lighthouse" tab
4. Select categories:
   - Performance
   - Accessibility
   - Best Practices
   - SEO
5. Click "Generate report"

**Target Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 95+

### Performance Checklist

- [ ] All images optimized (< 500KB each)
- [ ] Lazy loading enabled for images
- [ ] CSS minified (for production)
- [ ] JavaScript minified (for production)
- [ ] External resources on CDN
- [ ] Browser caching enabled
- [ ] HTTPS enabled
- [ ] Responsive images with srcset

### Performance Monitoring Tools

- **Google Lighthouse** - Built into Chrome DevTools
- **WebPageTest** - https://www.webpagetest.org/
- **GTmetrix** - https://gtmetrix.com/
- **PageSpeed Insights** - https://pagespeed.web.dev/

## Troubleshooting

### Common Issues and Solutions

#### Issue: Website Not Deploying

**Symptoms:**
- Changes pushed but not visible on live site
- GitHub Actions workflow failing

**Solutions:**
1. Check GitHub Actions status:
   - Go to repository → Actions tab
   - Review latest workflow run
   - Check for error messages

2. Verify GitHub Pages settings:
   - Go to Settings → Pages
   - Ensure Source is set to "GitHub Actions"
   - Check deployment status

3. Check for errors in workflow file:
   ```bash
   # Validate YAML syntax
   cat .github/workflows/deploy.yml
   ```

4. Manually trigger workflow:
   - Go to Actions → Deploy to GitHub Pages
   - Click "Run workflow"

#### Issue: Images Not Loading

**Symptoms:**
- Broken image icons
- Images not displaying

**Solutions:**
1. Verify file paths are correct (case-sensitive):
   ```html
   <!-- Correct -->
   <img src="images/screenshots/android/phone/home.png">
   
   <!-- Incorrect -->
   <img src="/images/screenshots/android/phone/home.png">
   <img src="Images/Screenshots/Android/Phone/home.png">
   ```

2. Check file exists in repository:
   ```bash
   ls docs/images/screenshots/android/phone/
   ```

3. Verify file extension matches:
   - `home.png` not `home.PNG`
   - Check actual file extension

4. Clear browser cache:
   - Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

#### Issue: CSS/JS Not Loading

**Symptoms:**
- No styling applied
- Broken layout
- JavaScript features not working

**Solutions:**
1. Check file paths in HTML:
   ```html
   <!-- Correct relative paths -->
   <link rel="stylesheet" href="css/styles.css">
   <script src="js/main.js"></script>
   ```

2. Verify files exist:
   ```bash
   ls docs/css/
   ls docs/js/
   ```

3. Check browser console for errors:
   - Press F12 → Console tab
   - Look for 404 errors or other issues

4. Verify CDN resources are loading:
   - Check Network tab in DevTools
   - Ensure external resources load successfully

#### Issue: Mobile Menu Not Working

**Symptoms:**
- Hamburger menu doesn't open
- Menu doesn't close when clicking links

**Solutions:**
1. Check JavaScript console for errors
2. Verify JavaScript is loaded:
   ```bash
   cat docs/js/main.js
   ```
3. Ensure Font Awesome icons are loading
4. Test in different browsers

#### Issue: Broken Links

**Symptoms:**
- Links return 404 errors
- Navigation doesn't scroll to sections

**Solutions:**
1. Check anchor links in HTML:
   ```html
   <!-- Links should match section IDs -->
   <a href="#features">Features</a>
   <section id="features">...</section>
   ```

2. Verify external links:
   - Test each external link manually
   - Update broken or outdated links

3. Use link checker tool:
   ```bash
   # Install link checker
   npm install -g broken-link-checker
   
   # Check for broken links
   blc http://localhost:8080 -ro
   ```

#### Issue: Slow Page Load

**Symptoms:**
- Long loading times
- Poor Lighthouse performance score

**Solutions:**
1. Optimize images:
   ```bash
   # Compress images
   npx tinypng-cli docs/images/**/*.{png,jpg}
   ```

2. Check image sizes:
   ```bash
   # Find large images
   find docs/images -type f -size +500k
   ```

3. Enable lazy loading:
   ```html
   <img src="image.png" loading="lazy" alt="Description">
   ```

4. Minimize HTTP requests:
   - Combine CSS files
   - Combine JavaScript files
   - Use CSS sprites for icons (optional)

## Backup and Recovery

### Backup Strategy

**GitHub as Primary Backup:**
- All code is version-controlled in Git
- GitHub stores complete history
- Multiple contributors have clones

**Local Backups:**
```bash
# Clone repository
git clone https://github.com/chingalo-family/task-flow-website.git

# Create backup archive
tar -czf task-flow-website-backup-$(date +%Y%m%d).tar.gz task-flow-website/
```

### Recovery Procedures

#### Recover Deleted Files

```bash
# Find deleted file in history
git log --all --full-history -- path/to/file

# Restore file from specific commit
git checkout <commit-hash> -- path/to/file
```

#### Revert Accidental Changes

```bash
# Revert last commit
git revert HEAD

# Revert specific commit
git revert <commit-hash>

# Discard local changes
git checkout -- path/to/file
```

#### Restore to Previous State

```bash
# View commit history
git log --oneline

# Create new branch from old commit
git checkout -b recovery-branch <commit-hash>

# Or reset current branch (careful!)
git reset --hard <commit-hash>
```

## Security Updates

### Regular Security Checks

1. **Check for Vulnerabilities**
   - Review GitHub security advisories
   - Check CDN library versions
   - Monitor for security patches

2. **Update Dependencies**
   - Update external libraries when security patches are released
   - Test after updates

3. **Review Access Permissions**
   - Audit repository collaborators
   - Review GitHub Pages settings
   - Check GitHub Actions permissions

### Security Best Practices

- **Use HTTPS** - Always load external resources via HTTPS
- **Update Libraries** - Keep dependencies up to date
- **Validate Input** - If adding forms, validate all input
- **External Links** - Use `rel="noopener noreferrer"`
- **CSP Headers** - Consider adding Content Security Policy

### Incident Response

If a security issue is discovered:

1. **Assess Impact** - Determine severity and scope
2. **Fix Immediately** - Create hotfix branch, fix issue
3. **Deploy Quickly** - Push to main, deploy ASAP
4. **Communicate** - Notify stakeholders if needed
5. **Document** - Record incident and resolution

## Best Practices

### Code Quality

- **Consistent Formatting** - Use consistent indentation and style
- **Comments** - Add comments for complex logic
- **Validation** - Validate HTML/CSS before committing
- **Testing** - Test changes locally before pushing

### Version Control

- **Meaningful Commits** - Write clear commit messages
- **Small Commits** - Make focused, incremental changes
- **Pull Requests** - Use PRs for all changes
- **Code Review** - Review all changes before merging

### Documentation

- **Keep Updated** - Update docs when making changes
- **Be Clear** - Write clear, concise documentation
- **Examples** - Include code examples
- **Changelog** - Maintain changelog for major updates

### Monitoring

- **Regular Checks** - Monitor site regularly
- **Error Tracking** - Watch for console errors
- **Performance** - Track performance metrics
- **User Feedback** - Collect and address user feedback

## Maintenance Checklist

### Pre-Update Checklist

- [ ] Review changes to be made
- [ ] Create feature branch
- [ ] Backup current state (git handles this)
- [ ] Test changes locally

### Update Checklist

- [ ] Make changes in feature branch
- [ ] Test all functionality
- [ ] Check responsive design
- [ ] Validate HTML/CSS
- [ ] Check accessibility
- [ ] Review browser console
- [ ] Update documentation if needed

### Post-Update Checklist

- [ ] Create pull request
- [ ] Code review
- [ ] Merge to main
- [ ] Verify deployment
- [ ] Test live site
- [ ] Monitor for issues
- [ ] Update changelog

## Getting Help

If you encounter issues not covered in this guide:

1. **Check Documentation** - Review all docs in `docs/` directory
2. **Search Issues** - Look for similar issues on GitHub
3. **Browser DevTools** - Check console for error messages
4. **Create Issue** - Report the issue with details
5. **Contact Maintainers** - Reach out to the development team

## Useful Commands

```bash
# Start local server
cd docs && python3 -m http.server 8080

# Check for broken links
npx broken-link-checker http://localhost:8080

# Optimize images
npx tinypng-cli docs/images/**/*.png

# Validate HTML
npx html-validate docs/*.html

# Check file sizes
du -sh docs/images/**/*

# Find large files
find docs -type f -size +500k -exec ls -lh {} \;

# Git status
git status

# View commit history
git log --oneline --graph --all

# Check remote repository
git remote -v
```

## Contact

For maintenance-related questions:
- **GitHub Issues:** Create an issue in the repository
- **Email:** Contact the Task Flow Development Team
- **Documentation:** Check `docs/` directory for more information

---

**Last Updated:** 2025-01-09  
**Maintained By:** Task Flow Development Team
