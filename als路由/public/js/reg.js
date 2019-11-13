var openName=false;
var openUpwd=false;
var isReg=true;
  //再找两个文本框
  var txtName=document.getElementById("uname");
  //console.log(txtName);
      //form.elements["username"];
  var txtPwd=document.getElementById("upwd");
  //console.log(txtPwd);
      //form.elements["pwd"]
  //2. 绑定事件处理函数
  //为文本框绑定获得焦点事件
  //当文本框获得焦点时
  txtName.onfocus=
  txtPwd.onfocus=function(){
      //3. 查找要修改的元素
      //查找文本框右侧的提示框
      var div=this.parentNode
                  .nextElementSibling
                  .children[0];
      //4. 修改元素
      div.className="vali_fail2";
  }
  /*失去焦点时，验证文本框中的内容*/
  //DOM四部
  //1.查找触发事件的元素
  //2.绑定事件
  //为姓名文本框绑定失去焦点事件
  txtName.onblur=function(){
      //定义验证姓名文本框的正则；
      var reg=/^\w{1,11}$/;
      var div=this.parentNode.nextElementSibling.children[0];
  //4修改元素
  //如果用正则验证当前文本框的内容通过
  if(reg.test(this.value)){
      //就把div改为正确的样式
      div.className="vali_success";
      openName=true;
      
  }else{
      div.className="vali_fail";
      openName=false;
      
     }  
  var xhr=new XMLHttpRequest();
  xhr.onreadystatechange=function(){
      if(xhr.readyState==4&&xhr.status==200){
          var result=xhr.responseText;
          if(result==1){
              alert("该用户已注册!");
              isReg=false;
          }else{
              
              isReg=true;
          }
      }
  }
  xhr.open("get","/user/v1/checkuname/"+uname.value,true);
  xhr.send();   
  }
  /*function vali(txt,reg){
  //3查找要修改的元素
  //查找文本框右侧的提示框
  var div=txt.parentNode.nextElementSibling.children[0];
  //4修改元素
  //如果用正则验证当前文本框的内容通过
  if(reg.test(txt.value)){
      //就把div改为正确的样式
      div.className="vali_success";
      openName=true;
      openUpwd=true;
  }else{
      div.className="vali_fail";
      openName=false;
      openUpwd=false;
     }  
  }*/
  //为密码框绑定失去焦点事件
  txtPwd.onblur=function(){
      //定义验证密码框的正则；
      var reg=/^\d{6}$/;
      var div=this.parentNode.nextElementSibling.children[0];
  //4修改元素
  //如果用正则验证当前文本框的内容通过
  if(reg.test(this.value)){
      //就把div改为正确的样式
      div.className="vali_success";
      
      openUpwd=true;
  }else{
      div.className="vali_fail";
      
      openUpwd=false;
     }  
  }


  function reg(){
      if(!(openName&&openUpwd)){
          return;
       }
     var $uname=uname.value;
    // console.log()
     var $upwd=upwd.value;
        //ajax post请求
        var xhr=new XMLHttpRequest();
         xhr.onreadystatechange=function(){
             console.log(xhr);
            if (xhr.readyState==4&&xhr.status==200)
            {var result=xhr.responseText;
              var result=JSON.parse(result);
              console.log(result);
                   if (result==1)
                   {alert("注册成功");
                   localStorage.setItem("uname",$uname);
                    localStorage.setItem("user_id",result.user);
                   location.href="als_login.html";
                   }else{
                     alert(result);
                     }
               }
          }
      xhr.open("post","/user/v1/register",true);
var formdata=`uname=${$uname}&upwd=${$upwd}`;
      xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
      //  console.log(formdata);
      xhr.send(formdata);
    }
