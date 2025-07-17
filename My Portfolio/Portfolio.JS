// Scroll Indicator
window.addEventListener('scroll', () => {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const scrollTop = window.pageYOffset;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / documentHeight) * 100;
    scrollIndicator.style.transform = `scaleX(${scrollPercent / 100})`;
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Fade-in Animation on Scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Header Background Change on Scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.style.backgroundColor = window.scrollY > 100
        ? 'rgba(26, 13, 46, 0.98)'
        : 'rgba(26, 13, 46, 0.95)';
});

// Typing Effect
const heroText = document.querySelector('.hero h2');
const text = 'Frontend & Blockchain Developer';
heroText.innerHTML = '';

let i = 0;
const typeWriter = () => {
    if (i < text.length) {
        heroText.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
};
setTimeout(typeWriter, 1000);

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const rate = scrolled * -0.5;
    heroContent.style.transform = `translateY(${rate}px)`;
});

// Skill Hover Effect
document.querySelectorAll('.skill-item').forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        skill.style.background = 'rgba(157, 78, 221, 0.2)';
        skill.style.transform = 'translateY(-5px) scale(1.05)';
    });

    skill.addEventListener('mouseleave', () => {
        skill.style.background = 'rgba(157, 78, 221, 0.1)';
        skill.style.transform = 'translateY(0) scale(1)';
    });
});
