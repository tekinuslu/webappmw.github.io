$(window).load(function(){
	'use strict';
	
/* ==  
	Loader Page
==*/
	$("#loading").fadeOut("1000", function() {
	// Animation complete
		$('#loading img').css("display","none");
		$('#loading').css("display","none");
		$('#loading').css("background","none");
		$('#loading').css("width","0");
		$('#loading').css("height","0");
	});
	
/* ==  
	Disable Animated on Devices 
==*/

	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		$('.animated').addClass('visible');
	}
	else{
	    $('.animated').appear(function() {
		    var elem = $(this);
		    var animation = elem.data('animation');
		    if ( !elem.hasClass('visible') ) {
		       	var animationDelay = elem.data('animation-delay');
		        if ( animationDelay ) {
		            setTimeout(function(){
		                elem.addClass( animation + " visible" );
		            }, animationDelay);
		        } else {
		            elem.addClass( animation + " visible" );
		        }
		    }
		});
	}
	
});

$(function ($) {
	

/* ==  
	Slide Panel 
==*/
	
	// icon
	
	$('#overflow-icon').on('click', function(){
		$('#overflow-icon').toggleClass('active');
		$('#full-page').toggleClass('slide-right');
		$('#slidemenu').toggleClass('show-menu');
	});
	
	// full page
	
	$('#full-page').on('click', function(){
		$('#full-page').removeClass('slide-right');
		$('#slidemenu').removeClass('show-menu');
	});

	// Decect Viewport Screen
	
	 var sH = $(window).height();
		$('#home-header').css('height',sH);
		
		// Centering Text for Home Header
		var parent_height = $('.center-content').parent().height();
		var image_height = $('.center-content').height();
		  
		var top_margin = (parent_height - image_height)/2; 
		$('.center-content').css( 'padding-top' , top_margin);
	});


$(document).ready(function(){
	'use strict';

	  	
/* == 
	Accordian Menu  
==*/

	$("#accordian a").click(function(){
		var link = $(this);
		var closest_ul = link.closest("ul");
		var parallel_active_links = closest_ul.find(".active")
		var closest_li = link.closest("li");
		var link_status = closest_li.hasClass("active");
		var count = 0;
		closest_ul.find("ul").slideUp(function(){
			if(++count == closest_ul.find("ul").length)
				parallel_active_links.removeClass("active");
		});
		if(!link_status)
		{
			closest_li.children("ul").slideDown();
			closest_li.addClass("active");
		}
	})
	 
	
/* ==  
	Nice Scroll  
==*/

    $(".slidemeu-content").niceScroll({cursorborder:"",cursorcolor:"#757575"});

})

 
$(document).ready(function(){
	'use strict';

/* ==  
	Scroll to top  
==*/

	$("#back-top").hide();
	
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});

		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	

});


/* ==  
	Placeholder for IE   
==*/
	
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			});
		});
	}
	
	




/* ==  
	Bootstrap Script
==*/
	
	//tooltios
		$("[data-thumb=tooltip]").tooltip();
	
	//Tabs
		$('#myTab a').click(function (e) { 
		  e.preventDefault() 
		  $(this).tab('show')
		})
	
	//Toggles
		$('#myCollapsible').collapse({ 
		  toggle: false
		})
	
	//Carousal
		$('.carousel').carousel()
	
	//Alert
		$(".alert").alert()
	
	//Popovers
		$("[data-thumb=popover]").popover();
	
	//Dropdown Toggle
		$('.dropdown-toggle').dropdown()
	
	//Modal
		$('#myModal').modal('hide')