// ========== SMOOTH SCROLL & NAVIGATION ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            updateActiveNav();
        }
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ========== CTA BUTTON ==========
document.querySelector('.cta-button').addEventListener('click', function() {
    document.querySelector('#properties').scrollIntoView({ behavior: 'smooth' });
});

// ========== 3D CUBE MOUSE TRACKING ==========
document.querySelectorAll('.cube-container').forEach(container => {
    container.addEventListener('mousemove', (e) => {
        const cube = container.querySelector('.cube');
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const xPercent = (x / rect.width) * 30 - 15;
        const yPercent = (y / rect.height) * 30 - 15;
        
        cube.style.transform = `rotateX(${yPercent}deg) rotateY(${xPercent}deg)`;
    });
    
    container.addEventListener('mouseleave', () => {
        const cube = container.querySelector('.cube');
        cube.style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
});

// ========== FORM SUBMISSION ==========
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;
    
    if (name && email && phone && message) {
        // Log to console (in production, this would send to a server)
        console.log('Property Inquiry Received:', {
            name: name,
            email: email,
            phone: phone,
            message: message,
            timestamp: new Date().toISOString()
        });
        
        alert(`Thank you, ${name}!\n\nWe received your property inquiry.\nWe'll contact you at ${phone} or ${email} shortly.\n\nThank you for choosing Almufassal Properties!`);
        this.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// ========== INTERSECTION OBSERVER FOR ANIMATIONS ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.feature-card, .showcase-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});

// ========== ACTIVE NAV STYLING ==========
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #d4af37;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// ========== CONSOLE LOG ==========
console.log('%c🏠 Almufassal Properties Website', 'font-size: 20px; color: #d4af37; font-weight: bold;');
console.log('%cPremium Real Estate Solutions', 'font-size: 14px; color: #fff;');
console.log('%cWebsite loaded successfully! ✨', 'font-size: 12px; color: #2ecc71;');
