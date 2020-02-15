$(document).ready(function () {
    var WebHeight = document.body.clientHeight;
    var WindowScreen = window.screen.height;
    var BodyHeight = document.body.clientHeight;
    var divHei = $('div').height();
    console.log(WebHeight + '&' + WindowScreen + '&' + BodyHeight + '&' + divHei);
});