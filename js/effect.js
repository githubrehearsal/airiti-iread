$(document).ready(function () {
    $('.open').click(function (e) { 
        $('.pop').fadeIn(500);
    });
    $('.close').click(function (e) { 
        $('.pop').fadeOut(500);
    });
});