$(document).ready(function(){
	
	/* Makes content appear below Nav */
	var nav_height = $("nav").height();
	$("header").css("padding-top", nav_height);

	/* Show Mobile Menu */
	$("#btn-small-nav").click(function(){
		$("#mobile-menu").slideToggle(200);
		$("#btn-small-nav").toggleClass("fa-bars fa-close")
	})

	/* Makes Mobile Menu Disappear on Resize*/
	$(window).resize(function(){
		if ( $(window).width() > 680){
			$("#mobile-menu").css( 'display', 'none');
			$("#btn-small-nav").removeClass("fa-close");
			$("#btn-small-nav").addClass("fa-bars");
		}
	})

	/* Transparent to Solid Nav*/
	$(window).scroll(function(){
		var height = $("header").height();
		var scrollTop = $(window).scrollTop();

		if (scrollTop >= height - 40){
			$("nav").addClass('solid-nav');

		} else {
			$("nav").removeClass('solid-nav');
		}
	})

});