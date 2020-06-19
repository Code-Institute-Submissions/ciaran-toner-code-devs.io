// src for javascript mobile menu Dev ed https://www.youtube.com/watch?v=H4MkGzoACpQ&t=1181s

const menuicon = document.querySelector(".menuicon");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu-item li");

menuicon.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
