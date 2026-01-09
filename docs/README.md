# Task Flow Website Documentation

Welcome to the Task Flow website documentation! This directory contains all the documentation you need to understand, develop, maintain, and contribute to the Task Flow website.

## 📚 Documentation Index

### Getting Started

- **[SETUP.md](SETUP.md)** - Complete setup guide for local development
  - Prerequisites and installation
  - Running the local development server
  - Project structure overview
  - Common development tasks
  - Troubleshooting guide

### Contributing

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - Contribution guidelines
  - Code of Conduct
  - How to contribute (bugs, features, docs)
  - Development workflow
  - Pull request process
  - Coding standards

### Technical Documentation

- **[ARCHITECTURE.md](ARCHITECTURE.md)** - Architecture overview
  - Technology stack
  - Project structure
  - Design patterns
  - Component architecture
  - Data flow and styling architecture

- **[STYLE_GUIDE.md](STYLE_GUIDE.md)** - Code style guidelines
  - HTML/CSS/JavaScript style conventions
  - Naming conventions
  - BEM methodology
  - Accessibility standards
  - Git commit message format

- **[WEBSITE_SPECIFICATION.md](WEBSITE_SPECIFICATION.md)** - Design specifications
  - Color theme and branding
  - Responsive design requirements
  - Page structure and navigation
  - Feature specifications
  - Screenshot guidelines

### Operations

- **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deployment guide
  - GitHub Pages deployment
  - Automatic deployment with GitHub Actions
  - Manual deployment options
  - Custom domain setup
  - Troubleshooting deployment issues

- **[MAINTENANCE.md](MAINTENANCE.md)** - Maintenance guide
  - Regular maintenance tasks
  - Content updates
  - Dependency updates
  - Performance monitoring
  - Security updates
  - Backup and recovery

## 🌐 Live Website

**URL:** [https://chingalo-family.github.io/task-flow-website/](https://chingalo-family.github.io/task-flow-website/)

## 🚀 Quick Start

New to the project? Start here:

1. **Read [SETUP.md](SETUP.md)** to set up your development environment
2. **Review [ARCHITECTURE.md](ARCHITECTURE.md)** to understand the project structure
3. **Check [CONTRIBUTING.md](CONTRIBUTING.md)** before making changes
4. **Follow [STYLE_GUIDE.md](STYLE_GUIDE.md)** when writing code

## 📁 Project Structure

```
docs/
├── index.html                # Main landing page
├── privacy-policy.html       # Privacy policy page
├── terms-of-service.html     # Terms of service page
│
├── css/
│   └── styles.css            # Main stylesheet
│
├── js/
│   └── main.js               # JavaScript functionality
│
├── images/
│   ├── icons/
│   │   └── favicon.svg       # Website favicon
│   ├── og-image.svg          # Open Graph social media image
│   └── screenshots/          # App screenshots
│       ├── android/
│       │   ├── phone/
│       │   └── tablet/
│       └── ios/
│           ├── iphone/
│           └── ipad/
│
├── robots.txt                # Search engine directives
├── sitemap.xml               # XML sitemap for SEO
├── .nojekyll                 # Disable Jekyll processing
│
└── Documentation (*.md files)
    ├── README.md                     # This file (documentation index)
    ├── SETUP.md                      # Setup and development guide
    ├── CONTRIBUTING.md               # Contribution guidelines
    ├── ARCHITECTURE.md               # Architecture overview
    ├── STYLE_GUIDE.md                # Code style guidelines
    ├── WEBSITE_SPECIFICATION.md      # Design specifications
    ├── DEPLOYMENT.md                 # Deployment instructions
    └── MAINTENANCE.md                # Maintenance guide
```

## ✨ Key Features

- **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- **Dark Theme** - Consistent with the Task Flow app design language
- **Fast Loading** - Optimized assets and minimal dependencies
- **Accessible** - WCAG 2.1 Level AA compliant
- **SEO Optimized** - Meta tags, Open Graph, sitemap
- **No Build Process** - Simple HTML, CSS, and JavaScript

## 🎨 Color Theme

The website follows the Task Flow app color scheme:

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| Primary Blue | `#2E90FA` | Primary actions, links, CTA buttons |
| Dark Background | `#1A2332` | Main background, header/footer |
| Card Background | `#243447` | Content cards, sections |
| Text Primary | `#FFFFFF` | Headings, primary text |
| Text Secondary | `#94A3B8` | Descriptions, supporting text |

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **AOS Library** - Scroll animations
- **Font Awesome** - Icon library
- **Google Fonts (Inter)** - Typography

## 🌍 Browser Support

Tested and supported on:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS)
- ✅ Chrome Mobile (Android)

## 📝 Environment Variables

**Note:** This is a **static website** and does **not require** any environment variables or `.env` files.

All configuration is done through:
- HTML meta tags in `index.html`
- CSS variables in `css/styles.css`
- JavaScript constants in `js/main.js`

See [SETUP.md](SETUP.md) for details on customizing these settings.

## 🤝 Contributing

We welcome contributions! Please read:

1. **[Code of Conduct](CONTRIBUTING.md#code-of-conduct)** - Our community guidelines
2. **[How to Contribute](CONTRIBUTING.md#how-can-i-contribute)** - Ways to help
3. **[Development Workflow](CONTRIBUTING.md#development-workflow)** - Step-by-step process
4. **[Coding Standards](CONTRIBUTING.md#coding-standards)** - Code quality guidelines

## 📖 Additional Resources

- **GitHub Repository:** [chingalo-family/task-flow-website](https://github.com/chingalo-family/task-flow-website)
- **Issues:** [Report bugs or request features](https://github.com/chingalo-family/task-flow-website/issues)
- **Pull Requests:** [View open PRs](https://github.com/chingalo-family/task-flow-website/pulls)

## 📞 Getting Help

If you need help:

1. **Check the Documentation** - Review the guides in this directory
2. **Search Issues** - Look for similar questions or problems
3. **Create an Issue** - Ask a question or report a problem
4. **Contact Maintainers** - Reach out to the Task Flow Development Team

## 📜 License

© 2025 Task Flow. All rights reserved.

For licensing information, see the [LICENSE](../LICENSE) file in the root directory.

---

**Last Updated:** 2025-01-09  
**Maintained By:** Task Flow Development Team
