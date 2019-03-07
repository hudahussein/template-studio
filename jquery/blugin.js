/*global $, window*/

$(function () {
	'use strict';
	
	//trigger nice scroll blugin
	
	$('html').niceScroll({
        cursorcolor: '#CC0000',
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: 0
        
    });
    
    
    //togller
    $(function () {
        $('.togle').on('click', function () {
            $('.menu').slideToggle();
        });
    });
	
    
	//change header height
	$('.header').height($(window).height());
	
    
    
	//scroll to features
	$('.header .arrow i').click(function () {
        
		$('html, body').animate({
            
			scrollTop: $('.features').offset().top
            
		}, 1000);
        
	});
    
    $('.header .hire').click(function () {
        
		$('html, body').animate({
            
			scrollTop: $('.our-team').offset().top
            
		}, 1000);
        
	});
    
    
    
	//show hidden items from work
    
    $('.show-more').click(function () {
        
        
        $('.hidden').fadeIn(1500);
    });
    
    
    
    //check testimonials
    
    var leftArrow = $('.testimonials .fa-chevron-left'),
        
        rightArrow = $('.testimonials .fa-chevron-right');
    
    function checkClients() {
        
        if ($('.client:first').hasClass('active')) {
            
            leftArrow.fadeOut();
            
        } else {
            
            leftArrow.fadeIn();
        }
    
    
        if ($('.client:last').hasClass('active')) {
            
            rightArrow.fadeOut();
            
        } else {
            
            rightArrow.fadeIn();
        }
    
    }
    checkClients();
    
    
    $('.testimonials i').click(function () {
        
        if ($(this).hasClass('fa-chevron-right')) {
            
            $('.testimonials .active').fadeOut(100, function () {
                
                $(this).removeClass('active').next('.client').addClass('active').fadeIn();
                
                checkClients();
                
            });
            
        } else {
            
            $('.testimonials .active').fadeOut(100, function () {
                
                $(this).removeClass('active').prev('.client').addClass('active').fadeIn();
                
                checkClients();
               
            });
        }
    });
      
   
    
    
});