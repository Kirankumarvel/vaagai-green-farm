// Fade In On Scroll for Feature Cards
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-on-scroll').forEach(el => {
    observer.observe(el);
});

// Stagger animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.2}s`;
});

// Add animation class on load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for floating elements
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const leaves = document.querySelectorAll('.float-leaf');
    
    leaves.forEach((leaf, index) => {
        const yPos = scrollY * (0.5 + index * 0.1);
        leaf.style.transform = `translateY(${yPos}px)`;
    });
});

// Button hover ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.left
// Button hover ripple effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        button.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Text animation on page load
const animateText = (element) => {
    const text = element.textContent;
    element.innerHTML = '';
    
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.opacity = '0';
        span.style.animation = `fadeIn 0.5s ease ${index * 0.05}s forwards`;
        element.appendChild(span);
    });
};


