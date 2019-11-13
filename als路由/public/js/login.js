var txtName=document.getElementById("uname");
		var txtPwd=document.getElementById("upwd");
		
		txtName.onblur=function(){
			//3. 查找要修改的元素
			//查找文本框右侧的提示框
			var div=this.parentNode
						.nextElementSibling
						.children[0];
			if(txtName.value==""){
			//4. 修改元素
			div.innerHTML="用户名不能为空";
		   }else{
			div.innerHTML="";
		   }
		}
		txtPwd.onblur=function(){
			//3. 查找要修改的元素
			//查找文本框右侧的提示框
			var div=this.parentNode
						.nextElementSibling
						.children[0];
			if(txtPwd.value==""){
			//4. 修改元素
			div.innerHTML="密码不能为空";
		   }else{
			div.innerHTML="";
		   }			
			
		}
			function login(){
				var $uname=uname.value;
				var $upwd=upwd.value;
				var xhr=new XMLHttpRequest();
				xhr.onreadystatechange=function(){
					if(xhr.readyState==4&&xhr.status==200){
						var result=xhr.responseText;
						var result=JSON.parse(result);
						console.log(result);
					 console.log(result.code);
						if(result.code==1){
							alert("登录成功");
							 localStorage.setItem("uname",$uname);
                             localStorage.setItem("user_id",result.user);
                              location.href="als.html";
							}else{
								alert("登录失败");
							}
					}
				}
				xhr.open("get","/user/login/"+$uname+"&"+$upwd,true);
				xhr.send();
			}