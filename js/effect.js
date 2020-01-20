$(document).ready(function () {
    var BannerHei = $('.banner').height();
    $(window).scroll(function () { 
        var WindowScroll = $(window).scrollTop();
        if ( WindowScroll > BannerHei + 45) {
            $('.top-menu').css({'top': '0px', 'opacity' : '1'});
            $('.new-year-icon').css({'top': '65px', 'opacity' : '1'});
        } else {
            $('.top-menu').css({'top': '-166px', 'opacity' : '0'});
            $('.new-year-icon').css({'top': '-250px', 'opacity' : '0'});
        }
    });
    $('.link').click(function (e) { 
        var Target = $($(this).attr('href')).offset().top;
        var Move = Target - 45;
        $('body').animate({scrollTop: Move},750);
        return false;
    });
});