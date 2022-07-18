const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const MenuClose = document.querySelector('.btn-menu-close');
const navToggle = document.querySelector('.navbar-toggle');
const navLinks = document.querySelectorAll('.nav-link');

navToggle.addEventListener("click", () => {
    navToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
})