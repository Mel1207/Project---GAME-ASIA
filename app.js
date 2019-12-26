const navSlide = () => {
    const menu = document.querySelector('.menu');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');
    const nav = document.querySelector('nav');

    menu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');


        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `linkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });

        // Menu animation
        menu.classList.toggle('toggle');
    });
}
navSlide();

$(document).ready(function() {
    $(window).on('scroll', () => {
        if ($(window).scrollTop ()) {
            $('nav').addClass('coloredNav');
        } else {
            $('nav').removeClass('coloredNav');
        }
    });
});