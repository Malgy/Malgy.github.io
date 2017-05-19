//Using jQuery with my website
$(document).ready(function(){
	$a = $('a');
	$a.mouseover(function(){
		$a.fadeTo('fast', 1);
	});
	$a.mouseout(function(){
		$a.fadeTo('fast', 0.5);
	});
});
