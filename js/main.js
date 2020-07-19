// This codes not my original work. Mobile menu clip-path effect src Dev ed https://www.youtube.com/watch?v=H4MkGzoACpQ&t=1181s

const mobileMenu = document.querySelector(".mobile-menu");
const navMenu = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li ");

mobileMenu.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});

// This codes not my original work. Mobile menu hamburger src https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_menu_icon_js

function mobileMenuOpen(x) {
    x.classList.toggle("transform");
  }