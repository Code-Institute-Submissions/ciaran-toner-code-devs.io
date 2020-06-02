$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 200) {
            $(".navbar-custom").addClass("active-navbar");
        } else {
           $(".navbar-custom").removeClass("active-navbar");
        }
    });
});