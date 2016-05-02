$(function() {
	$(".promo-box-text").hide();
	$(".promo-box").click(function() {
		var idClicked = $(this).prop('id').substr(10);
		$(".promo-box-text").each(function() {
			var currId = $(this).prop('id').substr(15);
			if(currId != idClicked) {
				if($("#promo-box-text-"+currId).css("display").localeCompare("none")) {
					$("#promo-box-text-"+currId).slideUp();
				}
			}
		});
		$("#promo-box-text-"+idClicked).slideToggle();
	});
});