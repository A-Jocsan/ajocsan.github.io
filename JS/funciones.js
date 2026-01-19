/* ===============================
   Animación de tarjetas al hacer scroll
   =============================== */

const infoCards = document.querySelectorAll('.info-card');

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    },
    {
        threshold: 0.25
    }
);

infoCards.forEach(card => observer.observe(card));

/* ===============================
   Efecto de entrada suave (fallback)
   =============================== */

window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
