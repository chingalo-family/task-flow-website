# Setup Guide

This guide will help you set up the Task Flow website for local development.

## Prerequisites

The Task Flow website is a static website built with HTML, CSS, and vanilla JavaScript. You don't need any build tools or package managers to get started.

### Required Software

- **Web Browser** - Any modern browser (Chrome, Firefox, Safari, Edge)
- **Text Editor or IDE** - VS Code, Sublime Text, Atom, or any code editor of your choice
- **Local Web Server** - Choose one of the following:
  - Python 3 (recommended for simplicity)
  - Node.js with `http-server` or `live-server`
  - PHP built-in server
  - Any other static file server

### Optional Tools

- **Git** - For version control and collaboration
- **Image Optimization Tools** - For optimizing screenshots and images
  - TinyPNG (https://tinypng.com/)
  - ImageOptim (https://imageoptim.com/)

## Quick Start

### 1. Clone the Repository

```bash
# Clone via HTTPS
git clone https://github.com/chingalo-family/task-flow-website.git

# Or clone via SSH
git clone git@github.com:chingalo-family/task-flow-website.git

# Navigate to the project directory
cd task-flow-website
```

### 2. Navigate to the Website Directory

All website files are located in the `docs/` folder:

```bash
cd docs
```

### 3. Start a Local Development Server

Choose one of the following methods to start a local server:

#### Option 1: Python 3 (Recommended)

```bash
# Start server on port 8080
python3 -m http.server 8080

# Or use a different port
python3 -m http.server 3000
```

Then open your browser and visit:
- http://localhost:8080

#### Option 2: Node.js with http-server

```bash
# Install http-server globally (one-time setup)
npm install -g http-server

# Start server
http-server -p 8080

# Or with live reload
npx live-server --port=8080
```

#### Option 3: Node.js with npx (No Installation Required)

```bash
# Start server directly
npx http-server -p 8080
```

#### Option 4: PHP Built-in Server

```bash
php -S localhost:8080
```

### 4. View the Website

Once the server is running, open your web browser and navigate to:
```
http://localhost:8080
```

You should see the Task Flow website homepage!

## Project Structure

```
task-flow-website/
├── docs/                          # Website files (deployed to GitHub Pages)
│   ├── index.html                # Main landing page
│   ├── privacy-policy.html       # Privacy policy page
│   ├── terms-of-service.html     # Terms of service page
│   ├── css/
│   │   └── styles.css            # Main stylesheet
│   ├── js/
│   │   └── main.js               # JavaScript functionality
│   ├── images/
│   │   ├── icons/
│   │   │   └── favicon.svg       # Website favicon
│   │   ├── og-image.svg          # Open Graph social media image
│   │   └── screenshots/          # App screenshots
│   │       ├── android/
│   │       │   ├── phone/
│   │       │   └── tablet/
│   │       └── ios/
│   │           ├── iphone/
│   │           └── ipad/
│   ├── robots.txt                # Search engine directives
│   ├── sitemap.xml               # XML sitemap for SEO
│   ├── .nojekyll                 # Disable Jekyll processing
│   ├── README.md                 # Documentation index
│   ├── SETUP.md                  # This file
│   ├── DEPLOYMENT.md             # Deployment instructions
│   ├── WEBSITE_SPECIFICATION.md  # Design specifications
│   ├── CONTRIBUTING.md           # Contribution guidelines
│   ├── ARCHITECTURE.md           # Architecture overview
│   ├── MAINTENANCE.md            # Maintenance guide
│   └── STYLE_GUIDE.md            # Code style guidelines
├── .github/
│   └── workflows/
│       └── deploy.yml            # GitHub Actions deployment workflow
├── .gitignore                    # Git ignore file
├── LICENSE                       # License information
└── README.md                     # Project README (links to docs)
```

## Environment Variables

**Note:** This is a static website and does **not require any environment variables** or `.env` files. All configuration is done through:

- HTML meta tags (in `index.html`)
- CSS variables (in `css/styles.css`)
- JavaScript constants (in `js/main.js`)

If you need to change any settings, edit these files directly:

### Common Customizations

#### Update Website Title and Description

Edit `docs/index.html`:
```html
<title>Your Title Here</title>
<meta name="description" content="Your description here">
```

#### Change Color Theme

Edit `docs/css/styles.css`:
```css
:root {
    --primary-blue: #2E90FA;
    --dark-bg: #1A2332;
    --card-bg: #243447;
    /* ... other CSS variables */
}
```

#### Modify JavaScript Behavior

Edit `docs/js/main.js`:
```javascript
// Change animation settings
AOS.init({
    duration: 800,  // Animation duration
    easing: 'ease-in-out',
    once: true
});
```

## Development Workflow

### Making Changes

1. **Edit Files** - Make changes to HTML, CSS, or JavaScript files in the `docs/` directory
2. **Refresh Browser** - Refresh your browser to see changes (hard refresh with Ctrl+F5 or Cmd+Shift+R if needed)
3. **Test Responsiveness** - Test on different screen sizes using browser DevTools
4. **Validate** - Check for any errors in browser console

### Testing Responsive Design

Use browser DevTools to test different screen sizes:

1. Open DevTools (F12 or Right-click → Inspect)
2. Toggle device toolbar (Ctrl+Shift+M or Cmd+Shift+M)
3. Select different devices or enter custom dimensions

**Breakpoints to Test:**
- Mobile: 375px, 414px, 768px
- Tablet: 768px, 1024px
- Desktop: 1280px, 1440px, 1920px

### Adding New Screenshots

To add app screenshots:

1. Capture screenshots from the Task Flow mobile app
2. Optimize images for web (target: 200-500KB per image)
3. Place in appropriate directory:
   ```
   docs/images/screenshots/android/phone/
   docs/images/screenshots/android/tablet/
   docs/images/screenshots/ios/iphone/
   docs/images/screenshots/ios/ipad/
   ```
4. Follow naming convention: `feature-name.png` (e.g., `task-management.png`)
5. Update references in HTML if needed

## Browser Compatibility Testing

Test the website in multiple browsers:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

### Testing Tools

- **BrowserStack** - Test on real devices and browsers
- **LambdaTest** - Cross-browser testing platform
- **Can I Use** - Check CSS/JS feature support (https://caniuse.com/)

## Accessibility Testing

Ensure the website is accessible to all users:

### Manual Testing

1. **Keyboard Navigation** - Navigate using Tab, Shift+Tab, Enter
2. **Screen Reader** - Test with NVDA (Windows) or VoiceOver (Mac)
3. **Color Contrast** - Verify text meets WCAG 2.1 AA standards

### Automated Tools

- **axe DevTools** - Browser extension for accessibility testing
- **WAVE** - Web accessibility evaluation tool
- **Lighthouse** - Built into Chrome DevTools

Run Lighthouse audit:
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Accessibility" category
4. Click "Generate report"

## Performance Optimization

### Image Optimization

```bash
# Using ImageOptim (Mac)
imageoptim docs/images/screenshots/**/*.png

# Using TinyPNG CLI (Node.js)
npx tinypng-cli docs/images/**/*.{png,jpg}
```

### CSS Minification (Optional)

For production, you can minify CSS:

```bash
# Using cssnano
npx cssnano docs/css/styles.css docs/css/styles.min.css
```

Then update the reference in `index.html`.

## Common Issues and Solutions

### Issue: Changes Not Showing

**Solution:**
- Hard refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache
- Check if you're editing the correct file
- Ensure server is running and pointing to the `docs/` directory

### Issue: CSS/JS Not Loading

**Solution:**
- Check file paths in HTML (should be relative)
- Ensure files exist in the correct location
- Check browser console for errors
- Verify server is serving files correctly

### Issue: Mobile Menu Not Working

**Solution:**
- Check browser console for JavaScript errors
- Ensure Font Awesome icons are loading
- Test in different browsers
- Clear browser cache

### Issue: Images Not Displaying

**Solution:**
- Verify image paths are correct
- Check file extensions match (case-sensitive on some systems)
- Ensure images exist in the specified location
- Check if images are corrupted

### Issue: Port Already in Use

**Solution:**
```bash
# Use a different port
python3 -m http.server 3000

# Or find and kill the process using the port
# On Mac/Linux:
lsof -ti:8080 | xargs kill -9

# On Windows:
netstat -ano | findstr :8080
taskkill /PID <PID> /F
```

## VS Code Recommended Extensions

For the best development experience in VS Code:

- **Live Server** - Launch local dev server with live reload
- **HTML CSS Support** - IntelliSense for HTML/CSS
- **Auto Rename Tag** - Automatically rename paired HTML tags
- **Prettier** - Code formatter
- **ESLint** - JavaScript linter
- **Path Intellisense** - Autocomplete filenames

### VS Code Settings

Create `.vscode/settings.json` (optional):

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "html.format.wrapLineLength": 120,
  "css.lint.unknownAtRules": "ignore"
}
```

## Next Steps

After setting up your development environment:

1. **Read Documentation** - Review all docs in the `docs/` directory
2. **Explore the Code** - Familiarize yourself with HTML, CSS, and JavaScript
3. **Make Changes** - Start with small modifications to understand the codebase
4. **Test Thoroughly** - Test your changes across devices and browsers
5. **Contribute** - See `CONTRIBUTING.md` for contribution guidelines

## Getting Help

If you encounter issues:

1. Check this setup guide and other documentation in `docs/`
2. Review browser console for errors
3. Search existing GitHub issues
4. Create a new issue with detailed information:
   - What you were trying to do
   - What happened
   - What you expected to happen
   - Steps to reproduce
   - Browser and OS information

## Additional Resources

- **MDN Web Docs** - https://developer.mozilla.org/
- **CSS-Tricks** - https://css-tricks.com/
- **Google Fonts** - https://fonts.google.com/
- **Font Awesome Icons** - https://fontawesome.com/icons
- **AOS Animation Library** - https://michalsnik.github.io/aos/
- **Can I Use** - https://caniuse.com/

---

**Last Updated:** 2025-01-09  
**Maintained By:** Task Flow Development Team
