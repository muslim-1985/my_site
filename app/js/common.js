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
           //scroll top menu modification
	   $(window).scroll(function () {
		   if ($(this).scrollTop() > 90){
		   	$('.logo').hide(200);
		   	$('.align-items-center, .phone-description').css({'height': '60'});
		   	$('.phone-description > .description').hide(200);
		   } else if($(this).scrollTop() < 90){
		   	$('.logo').show(200);
               $('.align-items-center, .phone-description').css({'height': '90'});
               $('.phone-description > .description').show(200);
		   }
       });
           //mobile buttton slide toggle function
          		 function handler(event) {
          		 	var target = $(event.target);
          		 	if(target.is(".description-mobile button")) {
          		 		target.next().slideToggle("slow");
          		 		//remove default "none" class slideToggle function
          		 		if($(this).css("display") === 'none'){
          		 			$(this).removeAttr('style');
          		 		}
          		 	}
          		 }
       		$(".description-mobile button").click(handler); 

       		//owl.carousel plugin 

       		//section servises carousel
       		$('.carousel-servises').owlCarousel({
       			items: 4,
       			autoplay: true,
       			nav: true,
       			autoplayTimeout: 4000,
       			smartSpeed: 2000,
       			navText: false,
       			loop: true,
       			smartSpeed: 700
       		}); 
       		//owl carousel trigger nav in section servises
       		var owl = $('.carousel-servises');
       		owl.owlCarousel();
       		// Go to the next item
       		$('.owl-next').click(function() {
       		    owl.trigger('next.owl.carousel');
       		})
       		// Go to the previous item
       		$('.owl-prev').click(function() {
       		    // With optional speed parameter
       		    // Parameters has to be in square bracket '[]'
       		    owl.trigger('prev.owl.carousel', [300]);
       		})
       		//section revievs carousel
       		  $('.owl-carousel').owlCarousel({
       		  	items: 1,
       		  	margin: 10,
       		  	nav: true,
       		  	navText: false,
       		  	loop: true,
       		  	dots: true,
       		  	autoplay: true,
       		  	autoplayTimeout: 4000,
       		  	animateOut: 'slideOutDown',
       		  	animateIn: 'flipInX',
       		  	smartSpeed: 700
       		  });
       		  //reviev section nav carousel
       		  var owl = $('.owl-carousel');
       		  owl.owlCarousel();
       		  $('.owl-next').click(function() {
       		      owl.trigger('next.owl.carousel');
       		  })
       		  $('.owl-prev').click(function() {
       		      owl.trigger('prev.owl.carousel', [300]);
       		  }) 

       		  //magnific-popup
       		  $('.popup-with-form').magnificPopup({
       		     type: 'inline',
       		     focus: '#name',
       		     removalDelay: 300,
       		     mainClass: 'mfp-fade'
       		  });  

       		  //phone mask
       		   $("#phone").mask("+7(999) 999-9999"); 
       		   $("#phone-mask").mask("+7(999) 999-9999");
});
