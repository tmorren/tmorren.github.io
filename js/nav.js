$(document).ready(function(){
	
	/* Makes content appear below Nav */
	var nav_height = $("nav").height();
	$("header").css("padding-top", nav_height);

	/* Show Mobile Menu */
	$("#btn-small-nav").click(function(){
		$("#mobile-menu").slideToggle(200);
		$("#btn-small-nav").toggleClass("fa-bars fa-close")
	})

	/* When a link is clicked, the menu disappears */
	$(".btnMobileLink").click(function(){
		$("#mobile-menu").slideToggle(200);
		$("#btn-small-nav").removeClass("fa-close");
		$("#btn-small-nav").addClass("fa-bars");
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
		var scrollTop = $(window).scrollTop();
		var header = $("header").height();

		if (scrollTop >= header/4){
			$("nav").addClass('solid-nav');
		} else {
			$("nav").removeClass('solid-nav');
		}
	})

	/* Smooth Scroll Function */
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html, body').animate({
	          scrollTop: target.offset().top - $('nav').height()
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});
});