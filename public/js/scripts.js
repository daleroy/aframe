/*-----------------------------------------------------------------------------------*/
/*	Header
/*-----------------------------------------------------------------------------------*/

/* Starting Animation on Load */
$('<img/>').attr('src', 'images/a_frame_logo.png').load(function() {
	jQuery('#logo').fadeIn(600, function() {
		jQuery('h1').animate({opacity: '1', 'padding-top': '0'}, 500,function() {
			jQuery('h2').animate({opacity: '1', 'padding-top': '0'}, 500,function() {
				if(jQuery(window).width()<767){
					jQuery('#explore').animate({opacity: '1', 'margin-top': '2em'}, 1000);
				} else {
					jQuery('#explore').animate({opacity: '1', 'margin-top': '4em'}, 1000);
				}
			});
		});
	});
});

textCenter();

	function textCenter()
{
	$('.text-container').css({
        position:'absolute'
    });

    $('.text-container').css({

        left: ($(window).width() - $('.text-container').outerWidth())/2,
        top: ($(window).height() - $('.text-container').outerHeight())/2

    });

}

jQuery(document).ready(function() {

	/*-----------------------------------------------------------------------------------*/
	/*	Navigation
	/*-----------------------------------------------------------------------------------*/

	var animate='down';

	jQuery(window).bind('scroll', function () {

		/* Animation for Top Navigation */
		var scrollTop = jQuery(window).scrollTop();

		if (scrollTop > jQuery('#services').offset().top-60 && animate == 'down') {
			animate='up';
			jQuery('#top-bar').stop().animate({top:'0'}, 300);
		} else if(scrollTop < jQuery('#services').offset().top-60 && animate == 'up'){
			animate='down';
			jQuery('#top-bar').stop().animate({top:'-75px'}, 300);
		}

		/* Update Section on Top-Bar */
		jQuery('section').each(function(){
			if (scrollTop > jQuery(this).offset().top-60){
				var section = jQuery(this).attr('id');
				$("#top-navigation ul li").each(function(){
					if(section == jQuery(this).find('a').attr('href').replace("#","") && jQuery(this).not('.active')){
						$("#top-navigation ul li").removeClass('active');
						jQuery(this).addClass('active');
					}
				});
			}
		});
	});

	/* Responsive Menu Click */
	jQuery('#menu-mobile').click(function(){
		if ( jQuery("#top-navigation ul").is(":visible") ) {
		    jQuery("#top-navigation ul").slideUp(500);
		   	jQuery('#menu-mobile').removeClass('active');
		} else {
		   	jQuery("#top-navigation ul").slideDown(500);
		   	jQuery('#menu-mobile').addClass('active');
		}
	});

	/* On Resize show menu on desktop if hidden */
	jQuery(window).resize(function() {
		textCenter();
	    if(jQuery(window).width()>992){
			if (jQuery("#top-navigation ul").is(":hidden") ) {
			    jQuery("#top-navigation ul").show();
			   	jQuery('#menu-mobile').removeClass('active');
			}
	    } else {
	    	if (jQuery("#top-navigation ul").is(":visible") ) {
			    jQuery("#top-navigation ul").hide();
			   	jQuery('#menu-mobile').removeClass('active');
			}


	    }
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Smooth Scroll - Navigation + .scroll items
	/*-----------------------------------------------------------------------------------*/

	jQuery('#top-navigation li').bind('click',function(event){
	    var anchor = jQuery(this).find('a');

	    jQuery('#top-navigation li').removeClass('active');
	    jQuery(this).addClass('active');

	    jQuery('html, body').stop().animate({
	        scrollTop: jQuery(anchor.attr('href')).offset().top-50
	    }, 1500,'easeInOutExpo');

	    /* If Mobile hide menu on select */
	    if(jQuery(window).width()<=767){
		    jQuery("#top-navigation ul").slideUp(500);
			jQuery('#menu-mobile').removeClass('active');
	    }

	    event.preventDefault();
	});

	jQuery('.scroll').bind('click',function(event){
	    var anchor = jQuery(this);

	    jQuery('html, body').stop().animate({
	        scrollTop: jQuery(anchor.attr('href')).offset().top-50
	    }, 1500,'easeInOutExpo');

	    /* If Mobile hide menu on select */
	    if(jQuery(window).width()<=767){
		    jQuery("#top-navigation ul").slideUp(500);
			jQuery('#menu-mobile').removeClass('active');
	    }

	    event.preventDefault();
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Works
	/*-----------------------------------------------------------------------------------*/

	var curWork,nextWork,previousWork,offsetWork;

	/* Works Top Bar */
	jQuery(window).bind('scroll', function () {
		if(jQuery(window).width()<767 && jQuery("#project-page").is(":visible")){
			var scrollTop = jQuery(window).scrollTop();

			if (scrollTop > jQuery('#project-details').offset().top-125) {
				jQuery('#project-top-bar').addClass('fixed').stop().animate({top:0},500);
			} else if(scrollTop < jQuery('#project-details').offset().top-125){
				jQuery('#project-top-bar').stop().animate({top:'-60px'},500,function(){
					jQuery('#project-top-bar').removeClass('fixed');
				});
			}

		}
	});

	/* Filter for Works */
	jQuery('#work-container').mixitup({
		targetDisplayGrid: 'block' // required to fix bug in Chrome with images height
	});

	/* If we're on medium or large device animate next and previous project name while hovering arrow's */
	if(jQuery(window).width()>767){
		jQuery('#next-project').mouseenter(function() {
			jQuery("#next-project-name").stop().animate({"right":"4em","opacity":"1"}, 500);
		}).mouseleave(function() {
			jQuery("#next-project-name").animate({"right":"8em","opacity":"0"}, 500);
		});
		jQuery('#previous-project').mouseenter(function() {
			jQuery("#previous-project-name").stop().animate({"left":"4em","opacity":"1"}, 500);
		}).mouseleave(function() {
			jQuery("#previous-project-name").animate({"left":"8em","opacity":"0"}, 500);
		});
	}

	/* Creates the filter menu for mobile version */
	$('#work-filter ul').each(function(){
		var select=$(document.createElement('select')).insertBefore($(this).parent()).addClass('visible-xs');;
		$('>li', this).each(function(){
			option=$(document.createElement('option')).appendTo(select).val(this.href).html($(this).html()).addClass($(this).attr('data-filter'));
		});
	});

	/* Filtering for Select */
	$('select').on('change',function(){
		jQuery('#work-container').mixitup('filter',jQuery(this).find('option:selected').attr('class'));
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Portfolio
	/*-----------------------------------------------------------------------------------*/
	$('.lightbox').click(function(e){
		var culkin = [["images/projects/Culkin/Culkin-Dual-Fireplace-A-Frame-Construction.JPG"],
			["images/projects/Culkin/Culkin-Family-Dining-Room-A-Frame-Construction.jpg"],
			["images/projects/Culkin/Culkin-Family-Room-Fireplace-A-Frame-Construction.JPG"],
			["images/projects/Culkin/Culkin-Family-Room-Staircase-A-Frame-Construction.JPG"],
			["images/projects/Culkin/Culkin-Sitting-Room-A-Frame-Construction.JPG" ],
			["images/projects/Culkin/Culkin-Staircase-2-A-Frame-Construction.JPG"],
			["images/projects/Culkin/Culkin-Staircase-A-Frame-Construction.jpg"],
			["images/projects/Culkin/Culkin-Stonework-1-A-Frame-Construction.JPG"],
			["images/projects/Culkin/Culkin-Stonework-A-Frame-Construction.JPG"]];

		var greenTurtle = [["images/projects/6_Green_Turtle/Green-Turtle-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-BBQ-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Bath-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Dining-Room-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Entrance-1-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Entrance-2-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Family-Room-Fireplace-A-Frame-Construction.JPG"],
			["images/projects/6_Green_Turtle/Green-Turtle-Foyer-1-A-Frame-Construction.JPG"],
			["images/projects/6_Green_Turtle/Green-Turtle-Foyer-3-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Foyer-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Kitchen-1-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Kitchen-2-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Kitchen-3-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Patio-1-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Patio-2-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Patio-3-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Shower-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Tile-Work-2-A-Frame-Construction.jpg"],
			["images/projects/6_Green_Turtle/Green-Turtle-Tile-Work-A-Frame-Construction.jpg"]];

		var gariano = [["images/projects/Gariano/Gariano-Bathroom-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Bathroom-Sink-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Dining-Room-1-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Family-Area-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Kitchen-1-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Kitchen-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Living-Area-1-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Living-Area-2-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Living-Room-1-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Living-Room-2-A-Frame-Construction.jpg"],
			["images/projects/Gariano/Gariano-Living-Room-4-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Living-Room-Ocean-View-Modern-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Powder-Closets-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Sitting-Room-1-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Tile-A-Frame-Construction.JPG"],
			["images/projects/Gariano/Gariano-Tile-Closeup-A-Frame-Construction.JPG"]
		];

		var mission = [['images/projects/Mission_Beach/Mission-Beach-A-Frame-Construction_6034.JPG'],
			['images/projects/Mission_Beach/Mission-Beach-A-Frame-Construction_0001.JPG'],
			['images/projects/Mission_Beach/Mission-Beach-A-Frame-Construction_6020.JPG'],
			['images/projects/Mission_Beach/Mission-Beach-A-Frame-Construction_6032.JPG'],
			['images/projects/Mission_Beach/Mission-Beach-A-Frame-Construction_6033.JPG']
		]

		var sbArray;
		var currentTarget = $(e.currentTarget);
		e.preventDefault();

		switch (currentTarget.attr('id')) {
			case 'culkinLightBox':
				sbArray = culkin;
				break;
			case 'greenTurtleLightBox':
				sbArray = greenTurtle;
				break;
			case 'garianoLightBox':
				sbArray = gariano;
				break;
			case 'missionLightBox':
				sbArray = mission;
				break;
		}

		// If one of the project thumbnails have been clicked then load the light box
		// with the rest of the photos.
		if (sbArray) {
			$.slimbox(sbArray, 0, {loop: true});
		}
	});

	/*-----------------------------------------------------------------------------------*/
	/*	Contacts
	/*-----------------------------------------------------------------------------------*/

	/* Validation Form with AJAX while typing for inputs */
	jQuery('input').bind('input propertychange', function() {
		jQuery(this).parent().find('.error').remove();
		jQuery(this).parent().find('.valid').remove();
	    if( jQuery(this).attr('id') == 'email' ){
			var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			if (jQuery(this).val() == "" || jQuery(this).val() == " ") {
				jQuery(this).after("<span class='error'></span>");
				jQuery(this).parent().find('.error').fadeIn('slow');
			} else if (!checkEmail.test(jQuery(this).val())) {
				jQuery(this).after("<span class='error'></span>");
				jQuery(this).parent().find('.error').fadeIn('slow');
			} else {
				jQuery(this).after("<span class='valid'></span>");
				jQuery(this).parent().find('.valid').fadeIn('slow');
			}
	    } else {
			if(jQuery(this).val() == "" || jQuery(this).val() == " "){
				jQuery(this).after("<span class='error'></span>");
				jQuery(this).parent().find('.error').fadeIn('slow');
			} else {
				jQuery(this).after("<span class='valid'></span>");
				jQuery(this).parent().find('.valid').fadeIn('slow');
			}
	    }
	});

	/* Validation Form with AJAX while typing for textarea */
	jQuery('textarea').bind('input propertychange', function() {
		jQuery(this).parent().find('.error').remove();
		jQuery(this).parent().find('.valid').remove();
		if(jQuery(this).val() == "" || jQuery(this).val() == " "){
			jQuery(this).after("<span class='error'></span>");
			jQuery(this).parent().find('.error').fadeIn('slow');
		} else {
			jQuery(this).after("<span class='valid'></span>");
			jQuery(this).parent().find('.valid').fadeIn('slow');
		}
	});


	/* Validation Form with AJAX on Submit */
	jQuery('#submit').click(function(){
		jQuery('span.error').fadeOut('slow');
		jQuery('span.valid').fadeOut('slow');
		jQuery('#thanks').hide();
		jQuery('#error').hide();
		jQuery('#timedout').hide();
		jQuery('#state').hide();

		var error = false;

		var name = jQuery('#name').val();
		if(name == "" || name == " ") {
			jQuery('#name').after("<span class='error'></span>");
			jQuery('#name').parent().find('.error').fadeIn('slow');
			error = true;
		} else {
			jQuery('#name').after("<span class='valid'></span>");
			jQuery('#name').parent().find('.valid').fadeIn('slow');
		}

		var checkEmail = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var email = jQuery('#email').val();
		if (email == "" || email == " ") {
			jQuery('#email').after("<span class='error'></span>");
			jQuery('#email').parent().find('.error').fadeIn('slow');
			error = true;
		} else if (!checkEmail.test(email)) {
			jQuery('#email').after("<span class='error'></span>");
			jQuery('#email').parent().find('.error').fadeIn('slow');
			error = true;
		} else {
			jQuery('#email').after("<span class='valid'></span>");
			jQuery('#email').parent().find('.valid').fadeIn('slow');
		}

		var message = jQuery('#message').val();
		if(message == "" || message == " ") {
			jQuery('#message').after("<span class='error'></span>");
			jQuery('#message').parent().find('.error').fadeIn('slow');
			error = true;
		} else {
			jQuery('#message').after("<span class='valid'></span>");
			jQuery('#message').parent().find('.valid').fadeIn('slow');
		}

		if(error == true) {
			jQuery('#error').fadeIn('slow');
			setTimeout(function() {
			    jQuery('#error').fadeOut('slow');
			}, 3000);
			return false;
		}

		var data_string = jQuery('#contact-form').serialize();

		jQuery.ajax({
			type: "POST",
			url: "mail",
			data: {name:name,email:email,message:message},
			timeout: 6000,
			error: function(request,error) {
				if (error == "timeout") {
					jQuery('#timedout').fadeIn('slow');
					setTimeout(function() {
					    jQuery('#timedout').fadeOut('slow');
					}, 3000);
				}
				else {
					jQuery('#state').fadeIn('slow');
					jQuery("#state").html('The following error occured: ' + error + '');
					setTimeout(function() {
					    jQuery('#state').fadeOut('slow');
					}, 3000);
				}
			},
			success: function() {
				jQuery('span.valid').remove();
				jQuery('#thanks').fadeIn('slow');
				jQuery('input').val('');
				jQuery('textarea').val('');
				setTimeout(function() {
				    jQuery('#thanks').fadeOut('slow');
				}, 3000);
			}
		});

		return false;
	});
});
