//Using jQuery with my website
$(document).ready(function(){
	$a = $('img.icon');
	$a.hover(function(){
		$a.fadeIn("fast");
	},
	function(){
		$a.fadeOut();
	});
});
