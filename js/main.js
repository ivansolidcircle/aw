$(function() {
	/* box contact */
	var winHeight = $(window).height();
	var boxContactHeight = $(".box-contact").height();
	if(winHeight > boxContactHeight) {
		/* box contact init position */
		var marginTop = (winHeight-boxContactHeight)/2;
		$(".box-contact").css("margin-top", marginTop+"px");
		/* box contact scroll effect */
		var offset = $(".box-contact").offset();
        var topPadding = marginTop+marginTop;
        $(window).scroll(function() {
            if ($(window).scrollTop() > offset.top) {
                $(".box-contact").stop().animate({
                    marginTop: $(window).scrollTop() - offset.top + topPadding
                });
            } else if ($(window).scrollTop() == 0) {
                $(".box-contact").stop().animate({
                    marginTop: marginTop
                });
            } else if ($(window).scrollTop() < offset.top) {
                $(".box-contact").stop().animate({
                    marginTop: $(window).scrollTop() + marginTop
                });
            };
        });
	}
	/* box contact hover effect */
	$(".box-contact-text").hide();
	$(".box-contact-content").hover(function() {
		$(this).animate({
			width: "300px"
		});
		$(this).find(".box-contact-text").show();
	}, function() {
		$(this).animate({
			width: "64px"
		});
		$(".box-contact-text").hide();
	});
	$(".box-contact-content").click(function() {
		$(this).animate({
			width: "64px"
		});
		$(".box-contact-text").hide();
	});
	/* notif */
	$(".ul-text-notif").ticker({ 
		interval: 7000,
		effect: "fadeIn",
		duration: 250
	});
	/* close notif */
	$(".close-notif").click(function() {
		$(".notif").slideUp("slow");
	});
	/* tooltip bank */
	$(".img-bank-bca").tooltipster({
        content: $("<span class='taCenter text-tooltip'>Jam BCA Offline:<br />Senin - Jumat = 21.00 WIB - 00.00 WIB (Internet Banking, ATM, M-Banking)<br />Sabtu = Tidak ada offline<br />Minggu = 00.00 WIB  - 05.00 WIB (Internet Banking)<br />Minggu = 02.00 WIB - 04.00 WIB (ATM, M-banking)</span>")
    });
	$(".img-bank-mandiri").tooltipster({
        content: $("<span class='taCenter text-tooltip'>Jam Mandiri Offline:<br />Senin - Minggu = 23.00 WIB - 04.00 WIB</span>")
    });
	$(".img-bank-bni").tooltipster({
        content: $("<span class='taCenter text-tooltip'>Jam BNI Offline:<br />BNI tidak ada jam offline</span>")
    });
	$(".img-bank-bri").tooltipster({
        content: $("<span class='taCenter text-tooltip'>Jam BRI Offline:<br />Senin - Minggu = 00.00 WIB - 05.00 WIB</span>")
    });
    /* berita bola slider */
	$(".crsl-items").carousel({ 
		visible: 2,
		itemMinWidth: 450,
		itemMargin: 10
	});
	/* games slider */
	jQuery(".our-games-content").slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		dots: true,
		infinite: true,
		speed: 300,
		centerMode: true,
		variableWidth: true,
		arrows: false,
		autoplay: true,
		autoplaySpeed: 5000,
		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4
				}
			}
		]
	});
	/* main slider */
	jQuery(".slider-wrapper").flexslider({
		animation: "slide",
		controlsContainer: $(".custom-controls-container"),
		customDirectionNav: $(".custom-navigation a")
	});
	/* custom scroll bar */
	if ($('.custom-sb').length){
		$(".custom-sb").mCustomScrollbar({
			theme:"dark"
		});
	}
	/* menu mobile */
	$(".menu-content-mobile").hide();
	$(".hamburger-menu").click(function() {
		if($(".menu-content-mobile").css("display")=="none") {
			$(".menu-content-mobile").slideDown("slow");
		}
		else if($(".menu-content-mobile").css("display")!="none") {
			$(".menu-content-mobile").slideUp("slow");
		}
	});
	/* refresh page on orientation change */
	window.onorientationchange = function(){
	   window.location.reload();
	}
	/* login register popup */
	$(".menu-register-link").click(function(){
		$(".menu-content-mobile").hide();
		var currHref = $(this).attr("href");
		var winWidth = $(window).width();
		var winHeight = $(window).height();
		var docHeight = $(document).height();
		$(".back-black").width(winWidth);
		$(".back-black").height(docHeight);
		$(".back-black").show();
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
	$(".back-black").click(function(){
		$(".back-black").hide();
		$(".popup").hide();
	});
	$(".login-register-close").click(function(){
		$(".back-black").hide();
		$(".popup").hide();
	});
});