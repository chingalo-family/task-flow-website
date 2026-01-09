# Contributing to Task Flow Website

Thank you for your interest in contributing to the Task Flow website! We welcome contributions from the community to help improve our website and make it better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Issue Guidelines](#issue-guidelines)
- [Community](#community)

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct:

### Our Pledge

We are committed to providing a welcoming and inclusive experience for everyone, regardless of:
- Age, body size, disability, ethnicity, gender identity and expression
- Level of experience, education, socio-economic status
- Nationality, personal appearance, race, religion
- Sexual identity and orientation

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

**Unacceptable behavior includes:**
- Harassment, trolling, or derogatory comments
- Publishing others' private information
- Any conduct which could reasonably be considered inappropriate

### Enforcement

Instances of unacceptable behavior may be reported to the project maintainers. All complaints will be reviewed and investigated promptly and fairly.

## How Can I Contribute?

There are many ways to contribute to the Task Flow website:

### 1. Report Bugs

If you find a bug, please create an issue with:
- **Clear title and description**
- **Steps to reproduce** the issue
- **Expected behavior** vs actual behavior
- **Screenshots** if applicable
- **Browser and OS** information
- **Error messages** from browser console

### 2. Suggest Enhancements

Have ideas to improve the website? Create an issue with:
- **Clear description** of the enhancement
- **Use cases** and benefits
- **Mockups or examples** if available
- **Implementation suggestions** (optional)

### 3. Fix Bugs

- Look for issues labeled `bug` or `good first issue`
- Comment on the issue to let others know you're working on it
- Follow the development workflow below

### 4. Implement Features

- Check issues labeled `enhancement` or `feature request`
- Discuss implementation approach in the issue before starting
- Break large features into smaller, manageable PRs

### 5. Improve Documentation

- Fix typos, clarify explanations, add examples
- Update outdated information
- Add missing documentation
- Translate documentation (future)

### 6. Design Improvements

- Enhance UI/UX
- Improve accessibility
- Optimize performance
- Update visual design

## Getting Started

### Prerequisites

1. **Fork the Repository**
   - Click the "Fork" button at the top right of the repository page
   - This creates a copy of the repository in your GitHub account

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR-USERNAME/task-flow-website.git
   cd task-flow-website
   ```

3. **Add Upstream Remote**
   ```bash
   git remote add upstream https://github.com/chingalo-family/task-flow-website.git
   ```

4. **Set Up Development Environment**
   - Follow instructions in [SETUP.md](SETUP.md)
   - Start local development server
   - Verify website works locally

## Development Workflow

### 1. Create a Branch

Always create a new branch for your work:

```bash
# Update your main branch
git checkout main
git pull upstream main

# Create a new branch
git checkout -b feature/your-feature-name
# or
git checkout -b fix/your-bug-fix-name
```

**Branch Naming Convention:**
- `feature/` - For new features (e.g., `feature/add-blog-section`)
- `fix/` - For bug fixes (e.g., `fix/mobile-menu-issue`)
- `docs/` - For documentation changes (e.g., `docs/update-setup-guide`)
- `style/` - For styling changes (e.g., `style/improve-button-design`)
- `refactor/` - For code refactoring (e.g., `refactor/optimize-css`)

### 2. Make Your Changes

- Edit files in the `docs/` directory
- Follow our [coding standards](#coding-standards)
- Test your changes thoroughly
- Ensure responsive design works

### 3. Test Your Changes

Before committing, verify:

- ✅ **Visual Testing** - Check on different screen sizes
- ✅ **Browser Testing** - Test in Chrome, Firefox, Safari, Edge
- ✅ **Mobile Testing** - Test on mobile devices or simulators
- ✅ **Accessibility** - Verify keyboard navigation and screen readers
- ✅ **Performance** - Check page load speed
- ✅ **Console** - No JavaScript errors
- ✅ **Links** - All links work correctly

### 4. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Add: implement new feature"
```

See [Commit Message Guidelines](#commit-message-guidelines) for details.

### 5. Push to Your Fork

```bash
git push origin feature/your-feature-name
```

### 6. Create a Pull Request

1. Go to your fork on GitHub
2. Click "Compare & pull request"
3. Fill out the PR template with:
   - **Clear title** describing the change
   - **Description** of what changed and why
   - **Related issues** (use "Fixes #123" or "Closes #123")
   - **Screenshots** for visual changes
   - **Testing performed**
4. Submit the pull request

## Pull Request Process

### PR Requirements

Your PR should:

1. **Focus on a single concern** - Keep PRs small and focused
2. **Pass all checks** - Ensure no errors or warnings
3. **Include tests** if applicable
4. **Update documentation** if needed
5. **Follow coding standards**
6. **Be up to date** with main branch

### Review Process

1. **Automated Checks** - GitHub Actions will run automatically
2. **Code Review** - Maintainers will review your code
3. **Feedback** - Address any requested changes
4. **Approval** - Once approved, your PR will be merged
5. **Deployment** - Changes deploy automatically to GitHub Pages

### After Your PR is Merged

- Delete your branch (optional)
- Update your fork:
  ```bash
  git checkout main
  git pull upstream main
  git push origin main
  ```

## Coding Standards

### HTML Guidelines

**Structure:**
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Proper heading hierarchy (h1 → h2 → h3)
- Use ARIA labels for accessibility

**Formatting:**
- Indent with 4 spaces
- Use lowercase for element names and attributes
- Close all tags properly
- Add alt text to all images

**Example:**
```html
<section class="features section" id="features">
    <div class="container">
        <h2 class="section-title">Key Features</h2>
        <div class="features-grid">
            <!-- Feature items -->
        </div>
    </div>
</section>
```

### CSS Guidelines

**Organization:**
- Follow existing structure in `styles.css`
- Group related styles together
- Use CSS variables for colors and common values
- Add comments for major sections

**Naming Convention:**
- Use BEM (Block Element Modifier) methodology
- Lowercase with hyphens: `.nav-menu`, `.button-primary`
- Avoid IDs for styling (use classes)

**Responsive Design:**
- Mobile-first approach
- Use relative units (rem, em, %) when appropriate
- Test at all breakpoints

**Example:**
```css
/* Features Section */
.features {
    padding: var(--section-padding);
    background-color: var(--dark-bg);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

/* Responsive */
@media screen and (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }
}
```

### JavaScript Guidelines

**Code Style:**
- Use modern ES6+ syntax
- Use `const` and `let` (avoid `var`)
- Add comments for complex logic
- Use meaningful variable names

**Organization:**
- Group related functionality
- Add section headers with comments
- Keep functions small and focused

**Example:**
```javascript
/**
 * Handle smooth scrolling for navigation links
 */
const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};
```

### Accessibility Standards

- **WCAG 2.1 Level AA** compliance required
- **Color contrast** - Minimum 4.5:1 for text
- **Keyboard navigation** - All interactive elements accessible
- **ARIA labels** - Use appropriate ARIA attributes
- **Alt text** - Descriptive text for all images
- **Focus indicators** - Visible focus states

### Performance Best Practices

- **Optimize images** - Compress before committing
- **Lazy loading** - Use for below-the-fold images
- **Minify code** - For production deployments
- **CDN resources** - Use CDN for external libraries
- **Reduce requests** - Combine files when possible

## Commit Message Guidelines

### Format

```
<type>: <subject>

<body (optional)>

<footer (optional)>
```

### Types

- `Add:` - Add new feature or content
- `Fix:` - Bug fix
- `Update:` - Update existing feature
- `Remove:` - Remove feature or code
- `Refactor:` - Code refactoring
- `Style:` - Style/formatting changes
- `Docs:` - Documentation changes
- `Test:` - Add or update tests
- `Chore:` - Maintenance tasks

### Examples

```bash
# Good commit messages
git commit -m "Add: implement mobile hamburger menu"
git commit -m "Fix: resolve navigation link active state issue"
git commit -m "Update: improve hero section responsive design"
git commit -m "Docs: add contribution guidelines"

# Bad commit messages (avoid these)
git commit -m "fix"
git commit -m "update"
git commit -m "changes"
git commit -m "asdf"
```

### Best Practices

- **Use imperative mood** - "Add feature" not "Added feature"
- **Be specific** - Describe what changed and why
- **Keep it concise** - Subject line under 72 characters
- **Reference issues** - Include issue numbers when applicable

## Issue Guidelines

### Creating Issues

Use the appropriate issue template when available:

**Bug Report Template:**
```markdown
## Bug Description
[Clear description of the bug]

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. Scroll down to '...'
4. See error

## Expected Behavior
[What should happen]

## Actual Behavior
[What actually happens]

## Screenshots
[If applicable]

## Environment
- Browser: [e.g., Chrome 120]
- OS: [e.g., Windows 11]
- Device: [e.g., Desktop, iPhone 13]
```

**Feature Request Template:**
```markdown
## Feature Description
[Clear description of the feature]

## Use Case
[Why is this feature needed?]

## Proposed Solution
[How should it work?]

## Alternatives Considered
[Other options you've considered]

## Additional Context
[Any other context or screenshots]
```

### Issue Labels

- `bug` - Something isn't working
- `enhancement` - New feature or request
- `documentation` - Documentation improvements
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention needed
- `question` - Further information requested
- `wontfix` - This will not be worked on
- `duplicate` - This issue already exists

## Community

### Communication Channels

- **GitHub Issues** - Bug reports and feature requests
- **Pull Requests** - Code contributions and discussions
- **Discussions** - General questions and ideas (if enabled)

### Getting Help

- **Documentation** - Check docs in the `docs/` directory
- **Existing Issues** - Search for similar issues or questions
- **Create an Issue** - If you can't find an answer

### Recognition

Contributors are recognized in:
- **Git history** - All commits are attributed to you
- **Release notes** - Mentioned in release announcements
- **README** - Major contributors may be listed

## Quick Checklist

Before submitting your PR, verify:

- [ ] Code follows our style guidelines
- [ ] Changes are tested in multiple browsers
- [ ] Responsive design works on all screen sizes
- [ ] No console errors or warnings
- [ ] Documentation is updated if needed
- [ ] Commit messages follow our format
- [ ] PR description is clear and complete
- [ ] All files are in the `docs/` directory
- [ ] Images are optimized
- [ ] Accessibility is maintained

## Thank You!

Your contributions help make Task Flow website better for everyone. We appreciate your time and effort! 🎉

---

**Questions?** Feel free to create an issue or reach out to the maintainers.

**Last Updated:** 2025-01-09  
**Maintained By:** Task Flow Development Team
