$(function(){
	$(".countrys").bind("click",function(){
		$(".xz_country").show();
	})
	$(".countryul li").bind("mouseover",function(){
		$(".countryul li").css({"background":"#00ccc9"});
		$(this).css({"background":"#fff"});
		$(this).bind("click",function(){
			$(".top_left i").removeClass().addClass($(this).text());
			$(".top_left span").html($(this).text());
		})
	})
	$(".countryul li").bind("click",function(){
		$(".xz_country").hide();
	})
	//以上是语言选择按钮
	//以下是房产众筹、投资攻略、媒体资讯下拉菜单
	$(".title_right_phon").bind("mouseover",function(){
		$(".title_phon_f").show();
	})
	$(".title_phon_f li").bind("mouseover",function(){
		$(".title_phon_f li").css({"background":"#dcdad9"});
		$(this).css({"background":"#fff"})
	})
	$(".title_phon_f").bind("mouseout",function(){
		$(".title_phon_f").hide();
	})
	
})