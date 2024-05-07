$(document).ready(function(){

	$("#ProductSub").click(function(){
		$(".Residentials").toggle(500);
	});

	$("#ResourcesSub").click(function(){
		$(".Properties").toggle(500);
	});

	$(".ThemeBtn").click(function(){
		$("body").toggleClass(function(){
			$(".ThemeBtn").text("Dark");
		});
	});


});