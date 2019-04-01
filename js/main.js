$(document).ready(function(){
	
	$('.car-category').click(function(){
		var tab_id = $(this).attr('data');

		$('.car-category').removeClass('active');
		$('.car-parametrs').removeClass('active');

		$(this).addClass('active');
		$("#"+tab_id).addClass('active');
	})
	
	$('.param-nav li').hover(function(){
		var tab_id = $(this).attr('data');
		console.log(tab_id);
		if(tab_id) {
			var tab_id = $(this).attr('data');
	
			$('.param-nav li').removeClass('active');
			$('.img-area').removeClass('active');
	
			$(this).addClass('active');
			$("#"+tab_id).addClass('active');
		}
	})


})