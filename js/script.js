$(document).ready(function(){

	//네비
	$(".top").hover(function(){
			$("ul.sub").stop().slideDown(500);
			$("#sub_bgbox").stop().slideDown(500);
		},function(){
			$("ul.sub").stop().slideUp(500);
			$("#sub_bgbox").stop().slideUp(500);
	});

	//이미지슬라이드
	// $(".mainslide>li").eq(0).siblings().css({"left":"-2000px"},100);

	// 	var slideI=0;
	// 	setInterval(function(){
	// 		if(slideI<3){slideI++;
	// 		}else{slideI=0;
	// 		};

	// 	$(".mainslide>li").eq(slideI).siblings().animate({"left":"-2000px"},100);
	// 	$(".mainslide>li").eq(slideI).animate({"left":"0"},100);
	// },3000);
	$(".mainslide>li:gt(0)").hide();
		setInterval(function(){
			$(".mainslide>li:first").fadeOut(2000)
			.next().fadeIn(2000).end()
				.appendTo(".mainslide");		
			},4000);








});//end