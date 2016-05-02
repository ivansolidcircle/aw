$(function() {
	$(".login-register-close").click(function(){
		$(".back-black").hide();
		$(".popup").hide();
	});
	$(".login-register-btn").click(function() {
		var currHref = $(this).attr("href");
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var docHeight = $(document).height();
		$(".popup").load(currHref, function(){
			var popupWidth = $(".popup").width();
			var popupHeight = $(".popup").height();
			if(winWidth>popupWidth) {
				var leftMargin = (winWidth-popupWidth)/2;
			}
			else {
				var leftMargin = 0;
			}
			if(winHeight>popupHeight) {
				var topMargin = (winHeight-popupHeight)/2;
			}
			else {
				var topMargin = 0;
			}
			$(".popup").css("left", leftMargin+"px");
			$(".popup").css("top", topMargin+"px");
			$(".popup").show();
		});
		return false;
	});
	$("#datepicker").datepicker({
		changeYear: true,
		changeMonth: true,
		yearRange: "1950:2050",
		showAnim: "fold",
		dateFormat: "dd-mm-yy"
	});
});