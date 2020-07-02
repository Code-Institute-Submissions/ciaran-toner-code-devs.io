// src for javascript mobile menu Dev ed https://www.youtube.com/watch?v=H4MkGzoACpQ&t=1181s

const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu-item li");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

//Mobile menu src https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js

function mobileMenuOpen(x) {
    x.classList.toggle("change");
  }