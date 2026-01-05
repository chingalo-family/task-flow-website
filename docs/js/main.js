/**
 * Task Flow Website - Main JavaScript
 * Version: 1.0
 */

// Initialize AOS (Animate On Scroll) library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ===================================
// Navigation Menu Toggle (Mobile)
// ===================================
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navLinks = document.querySelectorAll('.nav-link');

// Show menu
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// Hide menu
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Hide menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navigationLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (navigationLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navigationLink.classList.add('active');
            } else {
                navigationLink.classList.remove('active');
            }
        }
    });
}

window.addEventListener('scroll', scrollActive);

// ===================================
// Header Shadow on Scroll
// ===================================
function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
    }
}

window.addEventListener('scroll', scrollHeader);

// ===================================
// Scroll to Top Button
// ===================================
const scrollTopButton = document.getElementById('scroll-top');

function scrollTop() {
    if (this.scrollY >= 500) {
        scrollTopButton.classList.add('show');
    } else {
        scrollTopButton.classList.remove('show');
    }
}

window.addEventListener('scroll', scrollTop);

if (scrollTopButton) {
    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Smooth Scroll for Anchor Links
// ===================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Ignore if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Form Validation (if forms are added later)
// ===================================
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// ===================================
// Lazy Loading Images Enhancement
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Prevent Default for Placeholder Links
// ===================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ===================================
// Analytics Event Tracking (Placeholder)
// ===================================
function trackEvent(category, action, label) {
    // Placeholder for Google Analytics or other tracking
    console.log(`Event tracked: ${category} - ${action} - ${label}`);
    
    // Uncomment when Google Analytics is set up:
    // if (typeof gtag !== 'undefined') {
    //     gtag('event', action, {
    //         'event_category': category,
    //         'event_label': label
    //     });
    // }
}

// Track download button clicks
document.querySelectorAll('.button-download, .button-primary').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = e.currentTarget.textContent.trim();
        trackEvent('Downloads', 'Click', buttonText);
    });
});

// ===================================
// Console Welcome Message
// ===================================
console.log('%cTask Flow Website', 'font-size: 20px; font-weight: bold; color: #2E90FA;');
console.log('%cCollaborate and Achieve', 'font-size: 14px; color: #94A3B8;');
console.log('Version 1.0 - Built with ❤️ by Task Flow Development Team');

// ===================================
// Performance Monitoring
// ===================================
window.addEventListener('load', () => {
    // Log page load time
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log(`Page load time: ${pageLoadTime}ms`);
    }
});

// ===================================
// Service Worker Registration (for future PWA support)
// ===================================
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('/sw.js')
//             .then(registration => {
//                 console.log('Service Worker registered:', registration);
//             })
//             .catch(error => {
//                 console.log('Service Worker registration failed:', error);
//             });
//     });
// }

// ===================================
// Keyboard Navigation Enhancement
// ===================================
document.addEventListener('keydown', (e) => {
    // ESC key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('show-menu')) {
        navMenu.classList.remove('show-menu');
    }
});

// ===================================
// Detect reduced motion preference
// ===================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable AOS animations for users who prefer reduced motion
    AOS.init({
        disable: true
    });
}

// ===================================
// Dark/Light Mode Toggle (Future Enhancement)
// ===================================
// Placeholder for theme toggle functionality
function toggleTheme() {
    // This can be implemented later if light theme is needed
    console.log('Theme toggle not yet implemented');
}

// ===================================
// Newsletter Form Handler (Future Enhancement)
// ===================================
function handleNewsletterSubmit(e) {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    if (validateEmail(email)) {
        console.log('Newsletter subscription:', email);
        // Add API call to subscribe email
    } else {
        console.log('Invalid email address');
    }
}

// ===================================
// Browser Compatibility Checks
// ===================================
function checkBrowserSupport() {
    const features = {
        flexbox: CSS.supports('display', 'flex'),
        grid: CSS.supports('display', 'grid'),
        customProperties: CSS.supports('--var', '0')
    };
    
    console.log('Browser Feature Support:', features);
    
    // Warn if critical features are not supported
    if (!features.flexbox || !features.grid) {
        console.warn('Your browser may not support all features of this website.');
    }
}

checkBrowserSupport();

// ===================================
// External Link Handler
// ===================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    // Add rel="noopener noreferrer" for security
    if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
    }
    
    // Add external link indicator
    if (!link.querySelector('.external-icon')) {
        // Optional: add external link icon
        // link.innerHTML += ' <i class="fas fa-external-link-alt external-icon"></i>';
    }
});

// ===================================
// Copyright Year Auto-Update
// ===================================
const copyrightYear = document.querySelector('.footer-bottom p');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.innerHTML = copyrightYear.innerHTML.replace('2025', currentYear);
}

// ===================================
// Initialize everything on DOM ready
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Task Flow website initialized successfully');
});
