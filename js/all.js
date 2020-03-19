$(document).ready(function() {
	//當滑鼠移動至閱讀詳情會開啟活動詳情的視窗
	$('.test').hover(function() {
		$('.pop-layer').fadeIn(100);
	});
	//當點選活動視窗的按鈕後，會隱藏視窗
	$('.close-btn').click(function(event) {
		$('.pop-layer').fadeOut(100);
	});
});