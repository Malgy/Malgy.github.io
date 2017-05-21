//Using jQuery with my website
$(document).ready(function(){
	$a = $('img.icon');
	$a.mouseover(function(){
		$(this).fadeIn("fast", 0.5);
	});
	$a.mouseleave(function(){
		$(this).fadeOut("fast", 1);
	});
});
