# task-flow-website

Official website for the Task Flow application, hosted on GitHub Pages.

## 🌐 Live Website

Visit: [https://chingalo-family.github.io/task-flow-website/](https://chingalo-family.github.io/task-flow-website/)

## 📋 Overview

This repository contains the source code for the Task Flow website, a professional landing page showcasing the Task Flow task management and team collaboration application.

## ✨ Features

- **Fully Responsive Design** - Optimized for mobile, tablet, and desktop devices
- **Dark Theme** - Consistent with the app's modern design language
- **SEO Optimized** - Meta tags, Open Graph, sitemap, and structured data
- **Accessible** - WCAG 2.1 Level AA compliant
- **Fast Loading** - Optimized assets and lazy loading
- **Cross-Platform Showcase** - Highlights Android, iOS, and upcoming platforms

## 🚀 Quick Start

The website is built with HTML, CSS, and vanilla JavaScript - no build process required!

### Local Development

```bash
# Clone the repository
git clone https://github.com/chingalo-family/task-flow-website.git

# Navigate to the docs folder
cd task-flow-website/docs

# Start a local server (Python 3)
python3 -m http.server 8080

# Or use Node.js
npx http-server -p 8080

# Visit http://localhost:8080
```

## 📁 Project Structure

```
task-flow-website/
├── docs/                      # Website files (deployed to GitHub Pages)
│   ├── index.html            # Main HTML file
│   ├── css/
│   │   └── styles.css        # Stylesheet with dark theme
│   ├── js/
│   │   └── main.js           # JavaScript functionality
│   ├── images/
│   │   ├── icons/            # Favicon and icons
│   │   ├── screenshots/      # App screenshots (placeholder structure)
│   │   └── og-image.svg      # Open Graph social media image
│   ├── robots.txt            # Search engine directives
│   ├── sitemap.xml           # XML sitemap
│   └── .nojekyll             # Disables Jekyll processing
├── .github/
│   └── workflows/
│       └── deploy.yml        # GitHub Actions deployment workflow
├── WEBSITE_SPECIFICATION.md  # Detailed website specifications
├── DEPLOYMENT.md             # Deployment guide
└── README.md                 # This file
```

## 🎨 Design Specifications

The website follows the design specifications outlined in [WEBSITE_SPECIFICATION.md](WEBSITE_SPECIFICATION.md), including:

### Color Scheme
- **Primary Blue:** `#2E90FA`
- **Dark Background:** `#1A2332`
- **Card Background:** `#243447`
- **Text Primary:** `#FFFFFF`
- **Text Secondary:** `#94A3B8`

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## 🌍 Deployment

The website is automatically deployed to GitHub Pages using GitHub Actions.

### Deployment Steps:
1. Push changes to the `main` branch
2. GitHub Actions workflow automatically deploys to GitHub Pages
3. Website is live at: https://chingalo-family.github.io/task-flow-website/

For detailed deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## 📱 Sections

- **Home/Hero** - Main landing with tagline "Collaborate and Achieve"
- **Features** - Showcase of key features (Task Management, Team Collaboration, etc.)
- **Download** - Platform availability (Android, iOS, with future platforms)
- **About** - Mission, vision, and key benefits

## 🔧 Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Grid and Flexbox
- **JavaScript (ES6+)** - Interactive functionality
- **AOS Library** - Scroll animations
- **Font Awesome** - Icon library
- **Google Fonts (Inter)** - Typography

## ♿ Accessibility

The website is designed to be accessible to all users:
- WCAG 2.1 Level AA compliance
- Keyboard navigation support
- Screen reader compatibility
- Proper ARIA labels
- Sufficient color contrast ratios
- Skip links for navigation

## 📊 SEO Features

- Meta tags (title, description, keywords)
- Open Graph tags for social media
- Twitter Card support
- XML sitemap
- Robots.txt configuration
- Semantic HTML structure

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes in the `docs/` folder
4. Test locally to ensure responsiveness
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

© 2025 Task Flow. All rights reserved.

## 📧 Contact

For questions or support:
- Create an issue in this repository
- Contact the Task Flow Development Team

---

**Built with ❤️ by the Task Flow Development Team**