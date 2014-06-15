$(document).ready(function() {
	// $('.show-example').click(function(){
	// 	var url = $(this).attr('data-url');
	// 	$(this).parent().nextAll('.example').attr('src', 'examples/'+url).show();
	// 	$(this).parent().nextAll('.example-code').hide();
	// 	$('.example-tabs li').removeClass('current');
	// 	$(this).addClass('current');
	// });
	// $('.show-code').click(function(){
	// 	$(this).parent().nextAll('.example').attr('src', '').hide();
	// 	$(this).parent().nextAll('.example-code').show();
	// 	$('.example-tabs li').removeClass('current');
	// 	$(this).addClass('current');
	// });
  $('.tabs li').click(function(){
    updateTabs($(this));
    var id = $(this).parent().attr('id').slice(0,4);
    if($(this).attr('data-url')) {
      $('#'+id+'-exs .code-example').hide();
      $('#'+id+'-live').attr('src', 'examples/'+$(this).attr('data-url')).show();
    } else {
      $('#'+id+'-exs .code-example').show();
      $('#'+id+'-live').attr('src', '').hide();
    }
  });

  function updateTabs(t) {
    t.siblings().removeClass('current');
    t.addClass('current');
  }

	// click to highlight code area
	// $('.code-example').click(selectText(this)) 
});