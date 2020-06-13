const menuicon = document.querySelector(".menuicon");
const navMenu = document.querySelector(".nav-menu");
const links = document.querySelectorAll(".nav-menu-item li");

menuicon.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// $(function() {
//     $(window).on("scroll", function() {
//         if($(window).scrollTop() > 200) {
//             $(".navbar-custom").addClass("active-navbar");
//         } else {
//            $(".navbar-custom").removeClass("active-navbar");
//         }
//     });
// });


  
// typewriiter
//   var typeWritterh1 = document.getElementById('typeWritter');
// typeWritterh1.addEventListener('AnimationEnd',function( event ) { typeWritterh1.style.display = 'none'; }, false);