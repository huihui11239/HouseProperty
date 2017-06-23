//about返回顶部
$(function(){
	
		//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失 
		$(function () { 
			// $(window).scroll(function(){ 
			// 	if ($(window).scrollTop()>200){ 
			// 		$(".fh_top").fadeIn(); 
			// 	} else { 
			// 		$(".fh_top").fadeOut(); 
			// 	} 
			// }); 
		//当点击跳转链接后，回到页面顶部位置 
		$(".fh_top").click(function(){ 
		$('body,html').animate({scrollTop:0},500); 
		return false; 
		}); 
		}); 
	
})

//关于我们tab切换

$(document).ready(function  () {
			$(".box_wsa .tab_wsa li").click(function(){
					$(this).addClass("sel_wsa").siblings().removeClass("sel_wsa");
					$(".box_wsa .a").eq($(this).index()).show().siblings("div").hide();
				})
		})
// 表单验证(登录 注册 忘记密码)
$(function(){
		//如果是必填的，则加红星标识.
		$("form :input.required").each(function(){
			var $required = $("<strong class='high'> *</strong>"); //创建元素
			$(this).parent().append($required); //然后将它追加到文档中
		});
         //文本框失去焦点后
	    $('form :input').blur(function(){
			 var $parent = $(this).parent();
			 $parent.find(".formtips").remove();
			 //验证用户名
			 if( $(this).is('#username') ){
					if( this.value=="" || ( this.value!="" && !/^1[0-9]{10}$/.test(this.value) ) ){
					    var errorMsg = '请输入正确的手机号.';
                        $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
					}
			 }
			 //验证密码
			 if( $(this).is('#password') ){
				if( this.value=="" || ( this.value!="" && !/^.{5}$/.test(this.value) ) ){
                      var errorMsg = '请输入密码.';
					  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
				}
			 }
			 if( $(this).is('#password2') ){
				if( this.value=="" || ( this.value!="" && !/^.{5}$/.test(this.value) ) ){
                      var errorMsg = '请输入5位密码.';
					  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
				}
			 }
			 if( $(this).is('#password1') ){
				if( this.value=="" || ( this.value!="" && !/^.{5}$/.test(this.value) ) ){
                      var errorMsg = '请输入5位密码.';
					  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
				}
			 }
			 if( $(this).is('#password1') && ($(this).val().length==5) ){
				
				if( $(this).val()==$("#password").val() ){
               
				}else{
					 var errorMsg = '输入密码不一致.';
					  $parent.append('<span class="formtips onError">'+errorMsg+'</span>');
				}
				// if ($(this).val()==!$("#password").val()) {
				// 	alert(111)
				// };
			 }
		}).keyup(function(){
		   $(this).triggerHandler("blur");
		}).focus(function(){
	  	   $(this).triggerHandler("blur");
		});//end blur

		
		//提交，最终验证。
		 $('#rg').click(function(){
				$("form :input.required").trigger('blur');
				var numError = $('form .onError').length;
				if(numError||!$("form :checkbox").prop("checked")){
					return false;
				} 
				
				
		 });
		 $('#zc').click(function(){
				$("form :input.required").trigger('blur');
				var numError = $('form .onError').length;
				if(numError||!$("form :checkbox").prop("checked")){
					return false;
				} 
				
				
		 });
		 $('#sure').click(function(){
				$("form :input.required").trigger('blur');
				var numError = $('form .onError').length;
				if(numError||!$("form :checkbox").prop("checked")){
					alert(1)
					return false;

				}else{
					
					alert("新密码设置成功！无操作3s后返回登录页面！");
					// return false;
					setTimeout(function(){
						// alert(1)
						window.location.href="regist.html"; 
						// return false;  
					},3000)
				}
				
				
		 });
		 //修改密码
		 $('#sure1').click(function(){
				$("form :input.required").trigger('blur');
				var numError = $('form .onError').length;
				if(numError){
					
					return false;

				}else{
					
					alert("新密码设置成功！无操作3s后返回登录页面！");
					// return false;
					setTimeout(function(){
						// alert(1)
						// window.location.href="regist.html"; 
						// return false;  
					},3000)
				}
				
				
		 });
		 
 

})