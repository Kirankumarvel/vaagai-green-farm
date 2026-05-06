// Scroll-based animation trigger
const scrollReveal = () => {
    const reveals = document.querySelectorAll('.fade-in-on-scroll, .feature-card');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('show');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
scrollReveal(); // Initial call on page load

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// Section in view detection
const sections = document.querySelectorAll('section');
const navOptions = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
};

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, navOptions);

sections.forEach(section => {
    navObserver.observe(section);
});

// Stagger animation for elements
const staggerAnimation = (selector, delayIncrement = 0.1) => {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el, index) => {
        el.style.animationDelay = `${index * delayIncrement}s`;
    });
};

staggerAnimation('.feature-card', 0.15);
