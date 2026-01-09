# Style Guide

This guide defines the coding standards and style conventions for the Task Flow website. Following these guidelines ensures consistency and maintainability across the codebase.

## Table of Contents

- [HTML Style Guide](#html-style-guide)
- [CSS Style Guide](#css-style-guide)
- [JavaScript Style Guide](#javascript-style-guide)
- [Naming Conventions](#naming-conventions)
- [File Organization](#file-organization)
- [Accessibility Guidelines](#accessibility-guidelines)
- [Code Comments](#code-comments)
- [Git Commit Style](#git-commit-style)

## HTML Style Guide

### General HTML Principles

- Use HTML5 semantic elements
- Write valid, well-formed HTML
- Use lowercase for element names and attributes
- Close all tags properly
- Use double quotes for attributes
- Indent with 4 spaces (no tabs)

### Document Structure

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title</title>
    <!-- Meta tags, links -->
</head>
<body>
    <!-- Skip link -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <header class="header">
        <!-- Navigation -->
    </header>
    
    <!-- Main content -->
    <main id="main-content">
        <!-- Sections -->
    </main>
    
    <!-- Footer -->
    <footer class="footer">
        <!-- Footer content -->
    </footer>
    
    <!-- Scripts at end of body -->
    <script src="js/main.js"></script>
</body>
</html>
```

### Semantic HTML

**Good:**
```html
<header class="header">
    <nav class="nav">
        <ul class="nav-list">
            <li class="nav-item">
                <a href="#home" class="nav-link">Home</a>
            </li>
        </ul>
    </nav>
</header>

<main>
    <section class="hero section" id="home">
        <h1>Page Title</h1>
        <p>Description text</p>
    </section>
</main>

<footer class="footer">
    <p>&copy; 2025 Task Flow</p>
</footer>
```

**Bad:**
```html
<!-- Don't use non-semantic elements -->
<div class="header">
    <div class="nav">
        <div class="nav-list">
            <div class="nav-item">
                <a href="#home">Home</a>
            </div>
        </div>
    </div>
</div>
```

### Heading Hierarchy

Maintain proper heading hierarchy (h1 → h2 → h3):

```html
<main>
    <section>
        <h1>Main Page Title</h1>
        <section>
            <h2>Section Title</h2>
            <h3>Subsection Title</h3>
            <h3>Another Subsection</h3>
        </section>
        <section>
            <h2>Another Section</h2>
        </section>
    </section>
</main>
```

### Accessibility Attributes

Always include:

```html
<!-- Alt text for images -->
<img src="image.png" alt="Descriptive text about image">

<!-- ARIA labels where needed -->
<button aria-label="Close menu">
    <i class="fas fa-times"></i>
</button>

<!-- Form labels -->
<label for="email">Email Address</label>
<input type="email" id="email" name="email">

<!-- Lang attribute -->
<html lang="en">

<!-- Skip links -->
<a href="#main-content" class="skip-link">Skip to main content</a>
```

### Links

```html
<!-- Internal links -->
<a href="#features" class="nav-link">Features</a>

<!-- External links (always use rel attributes) -->
<a href="https://example.com" 
   target="_blank" 
   rel="noopener noreferrer">
    External Link
</a>

<!-- Download links -->
<a href="file.pdf" download>Download PDF</a>
```

### Indentation and Formatting

```html
<!-- Good: Proper indentation -->
<section class="features section">
    <div class="container">
        <h2 class="section-title">Features</h2>
        <div class="features-grid">
            <div class="feature-card">
                <h3>Feature Title</h3>
                <p>Description</p>
            </div>
        </div>
    </div>
</section>

<!-- Bad: Inconsistent indentation -->
<section class="features section">
<div class="container">
<h2 class="section-title">Features</h2>
        <div class="features-grid">
    <div class="feature-card">
<h3>Feature Title</h3>
<p>Description</p>
    </div>
        </div>
</div>
</section>
```

## CSS Style Guide

### General CSS Principles

- Mobile-first responsive design
- Use CSS variables for colors and common values
- BEM naming convention for classes
- Organize code logically
- Indent with 4 spaces
- One selector per line for multiple selectors

### CSS Organization

```css
/* ===================================
   1. CSS Variables
   =================================== */
:root {
    --primary-blue: #2E90FA;
    --dark-bg: #1A2332;
}

/* ===================================
   2. Reset and Base Styles
   =================================== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* ===================================
   3. Typography
   =================================== */
body {
    font-family: 'Inter', sans-serif;
    color: var(--text-primary);
}

/* ===================================
   4. Reusable Utilities
   =================================== */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
}

/* ===================================
   5. Layout Components
   =================================== */
.header { }
.nav { }
.footer { }

/* ===================================
   6. Sections
   =================================== */
.hero { }
.features { }

/* ===================================
   7. Responsive Media Queries
   =================================== */
@media screen and (min-width: 768px) { }
```

### BEM Naming Convention

```css
/* Block */
.nav { }

/* Element */
.nav-menu { }
.nav-list { }
.nav-item { }
.nav-link { }

/* Modifier */
.nav-link--active { }
.button--primary { }
.button--secondary { }

/* State (using is- or has- prefix) */
.nav-menu.is-open { }
.nav-link.is-active { }
```

**Example Usage:**
```html
<nav class="nav">
    <ul class="nav-list">
        <li class="nav-item">
            <a href="#home" class="nav-link nav-link--active">Home</a>
        </li>
        <li class="nav-item">
            <a href="#about" class="nav-link">About</a>
        </li>
    </ul>
</nav>
```

### CSS Variables

Define all colors, spacing, and common values as CSS variables:

```css
:root {
    /* Colors */
    --primary-blue: #2E90FA;
    --dark-bg: #1A2332;
    --card-bg: #243447;
    --text-primary: #FFFFFF;
    --text-secondary: #94A3B8;
    --success: #10B981;
    --warning: #F59E0B;
    --error: #EF4444;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 4rem;
    
    /* Font Sizes */
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.5rem;
    --font-size-2xl: 2rem;
    --font-size-3xl: 3rem;
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-base: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Border Radius */
    --radius-sm: 0.25rem;
    --radius-md: 0.5rem;
    --radius-lg: 1rem;
    
    /* Shadows */
    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
}
```

### Property Order

Group properties logically:

```css
.element {
    /* Positioning */
    position: relative;
    top: 0;
    left: 0;
    z-index: 10;
    
    /* Display & Box Model */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    margin: 1rem 0;
    padding: 1rem;
    
    /* Typography */
    font-family: var(--font-family);
    font-size: 1rem;
    line-height: 1.5;
    color: var(--text-primary);
    text-align: left;
    
    /* Visual */
    background-color: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: var(--radius-md);
    box-shadow: var(--shadow-md);
    
    /* Misc */
    cursor: pointer;
    transition: var(--transition-base);
}
```

### Responsive Design

Mobile-first approach:

```css
/* Base (Mobile) Styles */
.element {
    width: 100%;
    padding: 1rem;
}

/* Tablet */
@media screen and (min-width: 768px) {
    .element {
        width: 50%;
        padding: 1.5rem;
    }
}

/* Desktop */
@media screen and (min-width: 1024px) {
    .element {
        width: 33.333%;
        padding: 2rem;
    }
}

/* Large Desktop */
@media screen and (min-width: 1440px) {
    .element {
        padding: 2.5rem;
    }
}
```

### Selectors

```css
/* Good: Use classes */
.nav-link { }
.button-primary { }

/* Avoid: IDs for styling */
#nav-link { }  /* Don't use IDs */

/* Avoid: Overly specific selectors */
div.container section.features div.feature-card { }

/* Better: Simpler selectors */
.feature-card { }

/* Good: Direct child selector when needed */
.nav-list > .nav-item { }
```

## JavaScript Style Guide

### General JavaScript Principles

- Use ES6+ syntax
- Use `const` and `let` (avoid `var`)
- Use arrow functions when appropriate
- Use template literals for string interpolation
- Add comments for complex logic
- Indent with 4 spaces

### Variable Declarations

```javascript
// Good: const for values that don't change
const MAX_ITEMS = 100;
const apiUrl = 'https://api.example.com';

// Good: let for values that change
let count = 0;
let isActive = false;

// Bad: var (don't use)
var oldStyle = 'avoid this';
```

### Functions

```javascript
// Good: Arrow function for simple operations
const add = (a, b) => a + b;

// Good: Arrow function with block
const processData = (data) => {
    const result = data.map(item => item * 2);
    return result.filter(item => item > 10);
};

// Good: Named function for event handlers
function handleClick(event) {
    event.preventDefault();
    // Handle click logic
}

// Good: Function with JSDoc comment
/**
 * Scrolls smoothly to a section
 * @param {string} sectionId - The ID of the target section
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
```

### Event Listeners

```javascript
// Good: Named function for reusability
const handleMenuToggle = () => {
    navMenu.classList.toggle('show-menu');
};

navToggle.addEventListener('click', handleMenuToggle);

// Good: Arrow function for simple handlers
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Good: Check if element exists before adding listener
if (navToggle) {
    navToggle.addEventListener('click', handleMenuToggle);
}
```

### Naming Conventions

```javascript
// Variables: camelCase
const userName = 'John Doe';
const isActive = true;
const itemCount = 10;

// Constants: UPPER_SNAKE_CASE for true constants
const MAX_RETRIES = 3;
const API_BASE_URL = 'https://api.example.com';

// Functions: camelCase, descriptive verb + noun
function getUserData() { }
function updateNavLinks() { }
function scrollToSection() { }

// Boolean variables: is/has/should prefix
const isVisible = true;
const hasError = false;
const shouldUpdate = true;

// DOM elements: element type suffix
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const submitButton = document.querySelector('.submit-btn');
```

### Code Organization

```javascript
/**
 * Task Flow Website - Main JavaScript
 * Version: 1.0
 */

// ===================================
// Constants
// ===================================
const SCROLL_OFFSET = 80;
const ANIMATION_DURATION = 300;

// ===================================
// Library Initialization
// ===================================
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true
    });
}

// ===================================
// DOM Element Selection
// ===================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// ===================================
// Utility Functions
// ===================================
function scrollToSection(sectionId) {
    // Implementation
}

function updateActiveNavLink() {
    // Implementation
}

// ===================================
// Event Handlers
// ===================================
function handleNavToggle() {
    navMenu.classList.toggle('show-menu');
}

function handleNavLinkClick(event) {
    event.preventDefault();
    // Implementation
}

// ===================================
// Event Listeners
// ===================================
if (navToggle) {
    navToggle.addEventListener('click', handleNavToggle);
}

navLinks.forEach(link => {
    link.addEventListener('click', handleNavLinkClick);
});

// ===================================
// Initialization
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    updateActiveNavLink();
});
```

### Comments

```javascript
/**
 * Function description (JSDoc format)
 * @param {string} param1 - Description
 * @param {number} param2 - Description
 * @returns {boolean} Description of return value
 */
function exampleFunction(param1, param2) {
    // Single-line comment for simple explanation
    const result = param1.length > param2;
    
    /*
     * Multi-line comment for complex logic
     * Explanation of what this block does
     * and why it's necessary
     */
    if (result) {
        return true;
    }
    
    return false;
}

// Section separator comment
// ===================================
// Section Name
// ===================================
```

## Naming Conventions

### Files

- HTML files: lowercase, hyphenated: `index.html`, `privacy-policy.html`
- CSS files: lowercase, hyphenated: `styles.css`, `responsive.css`
- JavaScript files: lowercase, hyphenated: `main.js`, `animations.js`
- Images: lowercase, hyphenated: `hero-image.png`, `app-screenshot.png`

### Classes and IDs

- Classes: lowercase, hyphenated (BEM): `.nav-menu`, `.button-primary`
- IDs: lowercase, hyphenated: `#nav-toggle`, `#main-content`
- Avoid underscores in CSS: Use hyphens instead

### URLs and Anchors

- URL slugs: lowercase, hyphenated: `/privacy-policy`, `/terms-of-service`
- Anchor links: lowercase, hyphenated: `#features`, `#download`

## File Organization

### Directory Structure

```
docs/
├── index.html              # Main page
├── privacy-policy.html     # Privacy policy
├── terms-of-service.html   # Terms of service
├── css/
│   └── styles.css          # All styles in one file
├── js/
│   └── main.js             # All JavaScript in one file
├── images/
│   ├── icons/              # Icons and favicons
│   ├── screenshots/        # App screenshots
│   └── *.svg               # Other images
└── *.md                    # Documentation files
```

### File Size Guidelines

- **HTML files:** No strict limit, but keep organized
- **CSS file:** Keep under 100KB unminified
- **JavaScript file:** Keep under 50KB unminified
- **Images:** Optimize to 200-500KB each

## Accessibility Guidelines

### WCAG 2.1 Level AA Requirements

1. **Color Contrast**
   - Normal text: 4.5:1 minimum
   - Large text (18pt+): 3:1 minimum
   
2. **Keyboard Navigation**
   - All interactive elements accessible via keyboard
   - Visible focus indicators
   - Logical tab order
   
3. **Screen Readers**
   - Semantic HTML
   - Alt text for images
   - ARIA labels where appropriate
   
4. **Responsive Text**
   - Text can be resized up to 200%
   - Use relative units (rem, em)

### Accessibility Checklist

- [ ] Alt text on all images
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Skip links for navigation
- [ ] ARIA labels for icon-only buttons
- [ ] Form labels for inputs
- [ ] Sufficient color contrast
- [ ] Keyboard navigation works
- [ ] Focus indicators visible
- [ ] No content hidden only for screen readers

## Code Comments

### When to Comment

- **Always:**
  - Complex algorithms or logic
  - Non-obvious code
  - Workarounds or hacks
  - Section headers
  
- **Never:**
  - Obvious code
  - Bad code (fix it instead)

### Comment Examples

```javascript
// Good: Explains why
// Offset by header height to prevent content hiding
const scrollOffset = 80;

// Bad: Explains what (code is self-explanatory)
// Set scroll offset to 80
const scrollOffset = 80;

// Good: Section header
// ===================================
// Mobile Navigation Toggle
// ===================================

// Good: Complex logic explanation
/**
 * Calculate the active section based on scroll position
 * Accounts for header offset and section heights
 */
function getActiveSection() {
    // Implementation
}
```

## Git Commit Style

### Commit Message Format

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

### Types

- `Add:` - New feature or content
- `Fix:` - Bug fix
- `Update:` - Update existing feature
- `Remove:` - Remove code or feature
- `Refactor:` - Code refactoring
- `Style:` - Formatting, styling
- `Docs:` - Documentation
- `Test:` - Tests
- `Chore:` - Maintenance

### Examples

```bash
# Good
git commit -m "Add: mobile navigation menu toggle"
git commit -m "Fix: hero section responsive layout on tablets"
git commit -m "Update: improve feature card hover animations"
git commit -m "Docs: add setup instructions to README"

# Bad
git commit -m "fix"
git commit -m "updates"
git commit -m "asdf"
```

### Commit Best Practices

- Write in imperative mood: "Add feature" not "Added feature"
- Keep subject under 72 characters
- Capitalize first word
- No period at the end
- Reference issues when applicable: "Fix: navigation bug (fixes #123)"

## Code Review Checklist

Before submitting a pull request:

- [ ] Code follows HTML/CSS/JavaScript style guide
- [ ] BEM naming convention used for CSS
- [ ] Proper indentation (4 spaces)
- [ ] Comments added for complex logic
- [ ] No console.log() statements left in code
- [ ] Code tested in multiple browsers
- [ ] Responsive design tested
- [ ] Accessibility guidelines followed
- [ ] No linting errors
- [ ] Commit messages follow format

---

**Last Updated:** 2025-01-09  
**Maintained By:** Task Flow Development Team
