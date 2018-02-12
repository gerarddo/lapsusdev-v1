
/*$(function() { ... }); just jQuery short-hand for $(document).ready(function() { ... });*/

$(function(){
	$("#masterContainer").scroll(function(){
		var wsScroll = $("#masterContainer").scrollTop();
		if (wsScroll > 100){
			$("nav.navbar-inverse").removeClass("navbar-pos-1").addClass("navbar-pos-2");
			$("ul.navbar-right > li > a").removeClass("nav-btn-1").addClass("nav-btn-2");
			$("ul.navbar-nav > li > a").removeClass("nav-btn-1").addClass("nav-btn-2");
			$("a.navbar-brand").removeClass("iHome-parent1").addClass("iHome-parent2");
			$("i.fa-home").removeClass("iHome1").addClass("iHome2");
		} else {
			$("nav.navbar-inverse").removeClass("navbar-pos-2").addClass("navbar-pos-1");
			$("ul.navbar-right > li > a").removeClass("nav-btn-2").addClass("nav-btn-1");
			$("ul.navbar-nav > li > a").removeClass("nav-btn-2").addClass("nav-btn-1");
			$("a.navbar-brand").removeClass("iHome-parent2").addClass("iHome-parent1");
			$("i.fa-home").removeClass("iHome2").addClass("iHome1");
		}
	})

// once we got the heights, we will set triggers for each button in the navbar, animating
// the transition from the actual height, to the desired height 

	var block1Height = $("#block1").offset().top;
	var block2Height = $("#block2").offset().top;
	var block3Height = $("#block3").offset().top;

	$("#upBtn").on("click", function(){
		event.preventDefault();
		$("#masterContainer").animate(
			{scrollTop: 0}, 700
		);
	})

	$()

	$("#aboutBtn").on("click", function(){
		event.preventDefault();
		$("#masterContainer").animate(
			{scrollTop: block1Height - 80}, 700
		);
	})
	$("#portfolioBtn").on("click", function(){
		event.preventDefault();
		$("#masterContainer").animate(
			{scrollTop: block2Height - 40}, 700
		);
	})
	$("#contactBtn").on("click", function(){
		event.preventDefault();
		$("#masterContainer").animate(
			{scrollTop: block3Height - 40}, 700
		);
	})












});


