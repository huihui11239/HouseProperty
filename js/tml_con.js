$(function(){
	$(".con_right input[type=text]").each(function(){ 
		var text=$(this).val();
		$(this).focus(function(){
			if(text===$(this).val()){
				$(this).val("")
			}
		}).blur(function(){
			if($(this).val()==""){
				$(this).val(text);
			}
		})

	})
})
		// 	}
			// var phone=/[0-9]/;
			// // var str=/\w+\@[a-z0-9]+\.[a-z]{2,3}/;//判断邮箱
			// // var eml=$(".con_right input:eq(3)");
			// var tex=$(".con_right input:eq(2)");
			// if(phone.test(tex.html())){	
			// 	$("#fk").html("*手机号码输入错误，请重新输入！").addClass("fk_red");
		
			// }else{
			// 	$("#fk").html("*****！").addClass("fk_red");
			// }
			// if(str.test(eml.html())){
			// 	$("#fk").html("*ok！").addClass("fk_red");
				
			// 	}else{
			// 		$("#fk").html("*邮箱输入错误，请重新输入！").addClass("fk_red");
			// 	}
