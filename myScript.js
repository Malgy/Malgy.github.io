//Using jQuery with my website
$(document).ready(function(){
	$a = $('img');
	$a.mouseover(function(){
		$a.fadeTo('fast', 0.5);
	});
	$a.mouseout(function(){
		$a.fadeTo('fast', 1);
	});
});
