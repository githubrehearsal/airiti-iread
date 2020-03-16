$(document).ready(function () {
    $(window).scroll(function () { 
        var WindowScroll = $(window).scrollTop();
        var BannerHei = $('.banner').height();
        var Othertop = $('.other').offset().top;
        console.log(WindowScroll + '&' + Othertop)
        if (WindowScroll > BannerHei && WindowScroll < 1450) {
            $('.speacil-area').addClass('effect-move');
        } else {
            $('.speacil-area').removeClass('effect-move');
        }
    });
});