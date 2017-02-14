$('.circle').on("mouseenter click",function(){
	// alert("circle")
	if ($(this).is(".leftTop")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(-100deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
	}
	else if ($(this).is(".leftBottom")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(-170deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
	}
	else if ($(this).is(".bottom")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(133deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
	}
	else if ($(this).is(".rightBottom")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(75deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
	}
	else if ($(this).is(".rightTop")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(10deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
	}
	else if($(this).is(".top")) {
		// alert($(this).attr("class"));
		$(".center .arrowImg").css("transform","rotate(-45deg)");
		// $(".center img").css("height","70%");
		// $(".center img").css("margin-top","0%");
		$(this).css("opacity", "1");
		$(this).siblings(".circle").css("opacity", "0.4");
		$(".center").css("opacity", "1");
	}
});