// ============================================
// ALMUFASSAL PROPERTIES - JAVASCRIPT
// ============================================

// Vanilla Tilt Configuration
VanillaTilt.init(document.querySelectorAll('.property-card'), {
    max: 5,
    speed: 400,
    scale: 1.02,
    transition: true
});

// ============================================
// LAZY LOADING WITH INTERSECTION OBSERVER
// ============================================
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            const src = img.getAttribute('data-src');
            
            if (src) {
                img.setAttribute('src', src);
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '50px'
});

document.querySelectorAll('.lazy-image').forEach(img => {
    imageObserver.observe(img);
});

// ============================================
// SVG PATH ANIMATION ON SCROLL
// ============================================
const svgObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const svg = entry.target.querySelector('.floor-plan-svg');
            if (svg) {
                // Add animation classes or trigger stroke animations
                const paths = svg.querySelectorAll('path, rect, circle, line');
                paths.forEach((path, index) => {
                    path.style.animation = `drawPath 0.6s ease-out ${index * 0.1}s forwards`;
                });
            }
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.floor-plan-item').forEach(item => {
    svgObserver.observe(item);
});

// ============================================
// FORM SUBMISSION
// ============================================
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Log form data (in production, send to server)
        console.log('Property Inquiry:', data);
        
        // Show success message
        alert('Thank you for your inquiry! We will contact you shortly.');
        form.reset();
    });
});

// ============================================
// SMOOTH SCROLL NAVIGATION
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// HERO CTA BUTTON
// ============================================
document.querySelector('.hero-cta').addEventListener('click', () => {
    document.querySelector('#featured').scrollIntoView({ behavior: 'smooth' });
});

// ============================================
// SCROLL SNAP INDICATOR (Optional Enhancement)
// ============================================
const galleryViewport = document.querySelector('.gallery-viewport');
if (galleryViewport) {
    galleryViewport.addEventListener('scroll', () => {
        // You can add scroll position indicators here
        const scrollPosition = galleryViewport.scrollLeft;
        const itemWidth = galleryViewport.scrollWidth / document.querySelectorAll('.gallery-item').length;
        const currentIndex = Math.round(scrollPosition / itemWidth);
    });
}

// ============================================
// ACTIVE NAV LINK ON SCROLL
// ============================================
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (window.pageYOffset >= sectionTop) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
});

// ============================================
// CONSOLE LOG
// ============================================
console.log('%c🏢 Almufassal Properties', 'font-size: 24px; font-weight: bold; color: #b8956a;');
console.log('%cLuxury Real Estate | Architectural Excellence', 'font-size: 14px; color: #3d332f;');
console.log('%cWebsite loaded successfully ✨', 'font-size: 12px; color: #7a7a7a;');