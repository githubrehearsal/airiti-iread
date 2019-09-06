$(document).ready(function () {
    var BannerHei = $('.banner').height();
    $(window).scroll(function () { 
        var WindowScroll = $(window).scrollTop();
        if ( WindowScroll > BannerHei + 45) {
            $('.top-menu').css('top', '0px');
        } else {
            $('.top-menu').css('top', '-59px');
        }
    });
    $('.link').click(function (e) { 
        var Target = $($(this).attr('href')).offset().top;
        var Move = Target - 45;
        $('body').animate({scrollTop: Move},750);
        return false;
    });
});