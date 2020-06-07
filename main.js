$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".navbar-custom").addClass("active-navbar");
        } else {
           $(".navbar-custom").removeClass("active-navbar");
        }
    });
});

(function(){
    var burger = document.querySelector('.burger-container'),
        header = document.querySelector('.header');
    
    burger.onclick = function() {
        header.classList.toggle('menu-opened');
    }
}());

$('.nav-menu-item').click(function() {

    $('a').removeClass('active');
    $(this).addClass('active');
  });
  