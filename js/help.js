$(function() {
	$(".help-item-content").hide();
	$(".help-item-title").click(function() {
		var idClicked = $(this).prop('id').substr(16);
		$(".help-item-content").each(function() {
			var currId = $(this).prop('id').substr(18);
			if(currId != idClicked) {
				if($("#help-item-content-"+currId).css("display").localeCompare("none")) {
					$("#help-item-content-"+currId).slideUp();
				}
			}
		});
		$(".help-item-title").each(function() {
			if($(this).find(".help-item-arrow").hasClass("box_rotate")) {
				$(this).find(".help-item-arrow").removeClass("box_rotate");
				$(this).find(".help-item-arrow").addClass("box_rotate_ccw");
			}
		});
		if($("#help-item-content-"+idClicked).css("display").localeCompare("none")) {
			$("#help-item-content-"+idClicked).slideUp();
			$(this).find(".help-item-arrow").removeClass("box_rotate");
			$(this).find(".help-item-arrow").addClass("box_rotate_ccw");
		}
		else {
			$("#help-item-content-"+idClicked).slideDown();
			$(this).find(".help-item-arrow").removeClass("box_rotate_ccw");
			$(this).find(".help-item-arrow").addClass("box_rotate");
		}
	});
});