window.alert("수정 중인 웹사이트입니다😊")

$(function(){
	
	$(".popup_bg, .popup").show(0);
	$(".close button").click(function(){
		$(".popup_bg, .popup").fadeOut(300)
	});
	
	$(".sub, .sub_bg").hide(0);
	
	$(".header_area, .sub_bg").hover(function(){
		$(this).addClass("opa_black")
	}, function(){
		$(this).removeClass("opa_black")
	});
	
	$(".t_menu li").hover(function(){
		$(this).children("a").addClass("border");
		$(this).children(".sub").stop().slideDown();
		$(".header_area").animate({height: "300px"}, 100)
	}, function(){
		$(this).children("a").removeClass("border");
		$(this).children(".sub").stop().slideUp();
		$(".header_area").animate({height: "120px"}, 100)
	});
	
	
	$(".popup, .popup_bg").on("scroll touchmove mousewheel", function(e){
		e.preventDefault();
		e.stopPropagation();
		return false
	})
	
	var stop_slide = setInterval(footer_slide, 3000)
	
	$(".follow li").hover(function(){
		clearInterval(stop_slide)
	}, function(){
		stop_slide = setInterval(footer_slide, 3000)
	})
	
	function footer_slide(){
		$(".follow li").first().clone().appendTo(".follow")
		$(".follow").animate({left: "-=250px"}, 800, function(){
			$(".follow").css({left: "+=250px"})
			$(".follow li").first().remove()
		})
	}
	
}); //

$(window).scroll(function(){
		
		var win_x = $("html, body").scrollTop();
		console.log(win_x);
		if(win_x>120){
			$(".header_area").addClass("opa_black_scroll")
			
		} else{
			$(".header_area").removeClass("opa_black_scroll")
		}
		
	}); //$(window).scroll

$(function(){
	
	$(".best_new li h2").click(function(){
		$(this).parent().siblings().find("h2").removeClass("pink");
		$(this).addClass("pink");
	});
	
	$(".best_title").click(function(){
		$(".flower .best_f").css({display: "block"});
		$(".flower .new_f").css({display: "none"});
		
		$(".new_arrow").css({display: "none"});
		$(".best_arrow").css({display: "block"});
		
	});
	
	$(".new_title").click(function(){
		$(".flower .best_f").css({display: "none"})
		$(".flower .new_f").css({display: "block"})
		
		$(".new_arrow").css({display: "block"});
		$(".best_arrow").css({display: "none"});
	});
	
	
	$(".best_arrow .next").click(function(){
		$(".best_f").animate({left: "-=315px"}, 300, function(){
			$(".best_f li").first().appendTo(".best_f");
			$(".best_f").css({left: "+=315px"})
		});
	});
	
//	$(".best_arrow .next").click(function(){
//		
//		$(".best_f").animate({left: "+=315px"}, 300, function(){
//			$(".best_f li").last().prependTo(".best_f");
//			$(".best_f").css({left: "-=315px"})
//		});
//	}); 이렇게 하니까 부자연스럽게 움직임
	
	$(".best_arrow .prev").click(function(){
		
		$(".best_f").css({left: "-=315px"});
		$(".best_f li").last().prependTo(".best_f");
		$(".best_f").animate({left: "+=315px"}, 300);
	});
	
	$(".new_arrow .next").click(function(){
		$(".new_f").animate({left: "-=315px"}, 300, function(){
			$(".new_f li").first().appendTo(".new_f");
			$(".new_f").css({left: "+=315px"})
		});
	});
	
	$(".new_arrow .prev").click(function(){
		
		$(".new_f").css({left: "-=315px"});
		$(".new_f li").last().prependTo(".new_f");
		$(".new_f").animate({left: "+=315px"}, 300);
	});
})

//tea
$(function(){
	
	$(".t_best_new li h2").click(function(){
		$(this).parent().siblings().find("h2").removeClass("t_pink");
		$(this).addClass("t_pink");
	});
	
	$(".t_best_title").click(function(){
		$(".tea .best_t").css({display: "block"});
		$(".tea .new_t").css({display: "none"});
		
		$(".t_new_arrow").css({display: "none"});
		$(".t_best_arrow").css({display: "block"});
		
	});
	
	$(".t_new_title").click(function(){
		$(".tea .best_t").css({display: "none"})
		$(".tea .new_t").css({display: "block"})
		
		$(".t_new_arrow").css({display: "block"});
		$(".t_best_arrow").css({display: "none"});
	});
	
	
	$(".t_best_arrow .next").click(function(){
		$(".best_t").animate({left: "-=315px"}, 300, function(){
			$(".best_t li").first().appendTo(".best_t");
			$(".best_t").css({left: "+=315px"})
		});
	});
	
	$(".t_best_arrow .prev").click(function(){
		
		$(".best_t").css({left: "-=315px"});
		$(".best_t li").last().prependTo(".best_t");
		$(".best_t").animate({left: "+=315px"}, 300);
	});
	
	$(".t_new_arrow .next").click(function(){
		$(".new_t").animate({left: "-=315px"}, 300, function(){
			$(".new_t li").first().appendTo(".new_t");
			$(".new_t").css({left: "+=315px"})
		});
	});
	
	$(".t_new_arrow .prev").click(function(){
		
		$(".new_t").css({left: "-=315px"});
		$(".new_t li").last().prependTo(".new_t");
		$(".new_t").animate({left: "+=315px"}, 300);
	});
});

//슬라이드
$(function(){
	var n=0;
	
	var $current = $(".btn0")
	$current.addClass("on")
	
	var time = setInterval(slideinterval, 4000);
	
	$(".slide_btn li a, .s_prev, .s_next").hover(function(){
		clearInterval(time)
	}, function(){
		time = setInterval(slideinterval, 4000)
	}); //clearInterval
	
	$(".s_prev").click(function(){
		if(n>0){
			n--;
		} else{
			n=3;
		};
		
		$current.removeClass("on");
		$current = $(".btn" + n);
		target()
	});//$(".s_prev").click
	
	$(".s_next").click(function(){
		if(n<3){
			n++;
		} else{
			n=0;
		};
		$current.removeClass("on");
		$current = $(".btn" + n);
		target()
	}); //$(".s_next").click
	
	$(".slide_btn li a").click(function(){
		$current.removeClass("on")
		$current=$(this);
		n=$(this).parent().index();
		target()
	}); //$(".slide_btn li a").click
	
	function target(){
		var pos= n*(-1920)+"px";
		console.log("pos : "+pos);
		$(".slide").animate({"left":pos}, 1000, function(){
			$current.addClass("on");
		})
	}; //target
	
	function slideinterval(){
		n=(n+1)%4;
		
		$current.removeClass("on");
		$current = $(".btn" + n);
		$current.addClass("on");
		
		console.log("n : " + n);
		target()
	}
    
});

//review
