$(function(){
	var colorArr = ['#4b8df8','#35aa47','#4b8df8']
	$('.tab').click(function(){
		var $index = $(this).index();
		$(this).addClass('active').siblings('.active').removeClass('active');

		$($('.tab-info')[$index]).show().siblings('.tab-info').hide();
	})
})