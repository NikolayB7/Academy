$(function() {

	// Custom JS
	$(".btn__up").on('click', '[href*="#"]', function(e){
		var fixed_offset = 0;
		$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1500);
		e.preventDefault();
	});

	$('.click_navigation_touch').click(function(){
		$('.navigation_touch').show('clip',1000);
	})
	$('.click_navigation_close').click(function(){
		$('.navigation_touch').hide('clip',1000);
	})


});
