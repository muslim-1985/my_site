$(function() {

	// Custom JS
	//preloader function
	$(window).on('load', function () {
	    var $preloader = $('#page-preloader'),
	        $spinner   = $preloader.find('.spinner');
	    $spinner.fadeOut();
	    $preloader.delay(350).fadeOut('slow');
	});
	//touch hamburger toggle function
    	var touch = $('.touch');
        var menu_mobile = $('.main-menu-mobile');
     
           $(touch).on('click', function(e) {
           e.preventDefault();
           menu_mobile.slideToggle();
           subMenuMobile.hide(150);
       });
           //mobile buttton slide toggle function
          		 function handler(event) {
          		 	var target = $(event.target);
          		 	if(target.is(".description-mobile button")) {
          		 		target.next().slideToggle("slow");
          		 	}
          		 }
       		$(".description-mobile button").click(handler); 

       		//owl.carousel plugin 

       		//section servises carousel
       		$('.carousel-servises').owlCarousel({
       			items: 4,
       			autoplay: true,
       			autoplayTimeout: 3000,
       			smartSpeed:2000,
       			navText: false,
       			loop: true,
       			smartSpeed: 700
       		}); 
       		//section revievs carousel
       		  $('.owl-carousel').owlCarousel({
       		  	items: 1,
       		  	margin: 10,
       		  	nav: true,
       		  	navText: false,
       		  	loop: true,
       		  	smartSpeed: 700
       		  });    
});
