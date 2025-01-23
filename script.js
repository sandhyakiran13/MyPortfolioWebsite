// JavaScript to make navigation links fixed and highlight the active section link
window.addEventListener('scroll', function () {
    const headerContainer = document.querySelector('.header-container');
    const navLinks = document.querySelector('.navbar-nav');
    const sections = document.querySelectorAll('section');
    const links = document.querySelectorAll('.navbar-nav a');

    // Toggle transparent class based on scroll position
    if (window.scrollY > 50) {
        headerContainer.classList.add('transparent');
    } else {
        headerContainer.classList.remove('transparent');
    }

    // Highlight the active link when scrolling through sections
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3 && window.scrollY < sectionTop + sectionHeight - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});


