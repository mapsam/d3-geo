$(document).ready(function() {
	$('.show-example').click(function(){
		var url = $(this).attr('data-url');
		$(this).parent().nextAll('.example').attr('src', 'examples/'+url).show();
		$(this).parent().nextAll('.example-code').hide();
		$('.example-tabs li').removeClass('current');
		$(this).addClass('current');
	});
	$('.show-code').click(function(){
		$(this).parent().nextAll('.example').attr('src', '').hide();
		$(this).parent().nextAll('.example-code').show();
		$('.example-tabs li').removeClass('current');
		$(this).addClass('current');
	});
});