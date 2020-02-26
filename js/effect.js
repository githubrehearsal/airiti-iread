$(document).ready(function () {
    $(window).scroll(function () {
        var WindowScroll = $(this).scrollTop();
        var PositionArea = $('#top1').offset().top;
        if (WindowScroll >= PositionArea + 50) {
            $('.list-area').css('top','0px');
        } else {
            $('.list-area').css('top','-70px');
        }
    });
    $('.list-btn').click(function (event) {
		//抓出每個連結的距離
		var SrollTop = $($(this).attr('href')).offset().top;
        $('html,body').animate({ scrollTop: SrollTop + 50, }, 1000);
        return false;
    });
});