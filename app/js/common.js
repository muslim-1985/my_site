$(function() {

	// Custom JS
	//preloader function
	$(window).on('load', function () {
	    var $preloader = $('#page-preloader'),
	        $spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');
	});
    	var touch = $('.touch');
        var menu_mobile = $('.main-menu-mobile');
     
           $(touch).on('click', function(e) {
           e.preventDefault();
           menu_mobile.slideToggle();
           subMenuMobile.hide(150);
       });
});
