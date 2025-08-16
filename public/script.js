document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li a');
    const sections = document.querySelectorAll('main section');

    // Hide all sections initially except the home section
    sections.forEach(section => {
        if (section.id !== 'home' && section.id !== 'destinations') { 
            section.style.display = 'none';
        } else if (section.id === 'home') {
            section.style.display = 'block'; // Ensure home is visible
        }
    });

    // Set initial active link
    const homeLink = document.querySelector('a[href="#home"]');
    if (homeLink) {
        homeLink.classList.add('active');
    }

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);

            // Remove active class from all links and add to clicked link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            e.target.classList.add('active');

            sections.forEach(section => {
                if (section.id === targetId || (targetId === 'home' && section.id === 'destinations')) {
                    section.style.display = 'block'; // Show the target section
                } else {
                    section.style.display = 'none'; // Hide other sections
                }
            });

            // Close nav on link click for mobile
            if (nav.classList.contains('nav-active')) {
                nav.classList.remove('nav-active');
                burger.classList.remove('toggle');
            }
        });
    });
});
