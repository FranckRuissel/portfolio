/* === MENU MOBILE === */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Change icon (optional)
        const icon = navToggle.querySelector('i');
        if(navLinks.classList.contains('active')){
            icon.classList.remove('ri-menu-3-line');
            icon.classList.add('ri-close-line');
        } else {
            icon.classList.add('ri-menu-3-line');
            icon.classList.remove('ri-close-line');
        }
    });
}

// Fermer le menu au clic sur un lien
document.querySelectorAll('.nav__links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

/* === ANIMATION SCROLL === */
const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 1000,
    delay: 200,
    reset: false
});

sr.reveal('.hero__content', {});
sr.reveal('.hero__visual', { delay: 400 });
sr.reveal('.section__header', { interval: 200 });
sr.reveal('.expertise__card', { interval: 200 });
sr.reveal('.project__card', { interval: 200 });
sr.reveal('.timeline__item', { interval: 200, origin: 'left' });