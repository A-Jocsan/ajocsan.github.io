const elements = document.querySelectorAll('.info-card, .reveal');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.25 });

elements.forEach(el => observer.observe(el));
