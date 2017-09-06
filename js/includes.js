$(window).load(function() {
});

$(document).ready(function(){
	
	$('.etc_preloader_container').delay(500).fadeOut('slow');
	
	$('.etc_menu').click(function(){
		$('.hamburger').toggleClass('is-active');
		$('.etc_main_nav').toggleClass('on');
	});
	
	/*$('.etc_menu').click(function(){
		$('.etc_main_nav').slideToggle();
	});*/
	
	function handleResize() {
	var h = $('.etc_home_content').height();
		//k = h - 100;
			$('.etc_home_single_col, #fullpage').css({'height':h+'px'});
	}
	$(function(){
			handleResize();
	
			$(window).resize(function(){
			handleResize();
		});
	});
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		/*autoplay:true,
		autoplayTimeout:5000,
		autoplayHoverPause:true,*/
		animateOut: 'zoomInUp',
    	animateIn: 'flipInX',
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:3
			},
			1300:{
				items:4
			}
		}
	})
	
	$('.etc_home_single_col').mouseover(function(e){
		var getContent =  $(this).html();		
		$('#fullpage').html(getContent);
		$('.owl-prev, .owl-next, .etc_home_col_writeup').addClass('on');
		$('#fullpage').addClass('on');
		$('.etc_home_col_cont').addClass('on');
	});
	
	$('.etc_home_content').mouseleave(function(e){
		//var getContent =  $(this).html();		
		$('#fullpage').html('');
		$('.owl-prev, .owl-next, .etc_home_col_writeup').removeClass('on');
		$('#fullpage').removeClass('on');
		$('.etc_home_col_cont').removeClass('on');
	});
	
	$('.etc_inside_single_col_wrapper').hover(function(){
		$(this).find('.etc_inside_description').toggleClass('on');
		$(this).toggleClass('on');
		//$(this).find('.etc_inside_col_projects_writeup .etc_inside_description a').toggleClass('on');
	});
	
	$('.etc_gallery_thumbnail').click(function(){
		var galleryImg =  $(this).html();
		$('.etc_popup_wrapper').removeClass('on').addClass('on');
		$('.etc_gallery_wrapper').fadeIn().html(galleryImg);
	});
	
	$('.etc_video_play_icon').click(function(){
		$('.etc_popup_wrapper').removeClass('on').addClass('on');
		$('.etc_video_wrapper').fadeIn();
	});
	
	$('.etc_popup_close').click(function(){
		$('.etc_popup_wrapper').removeClass('on');
		$('.etc_video_wrapper,.etc_gallery_wrapper').fadeOut();
		$('.etc_video_wrapper').find('iframe').attr('src', $('iframe').attr('src'));
	});
	
	
});