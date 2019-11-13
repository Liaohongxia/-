var xhr=new XMLHttpRequest();
//	var productcode=result.productcode;
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){  
        var result=xhr.responseText;
        //console.log(result);
        var arr=JSON.parse(result);
    console.log(arr);    
var hun="";
for(var i=0;i<arr.length;i++){
console.log(arr.length)
hun+=`<div class="a1">
    <a href="${arr[i].href}">
       <img src="${arr[i].img}" width="320" height="320" border="0" alt="">
    </a>
    <div class="a1_1">
       <a href="${arr[i].href}">${arr[i].productname}</a>
    </div>
        <p>¥99</p>
    <div class="btn" data-productcode="${arr[i].productcode}">
       <a href="javascript:;" class="btn-buy" >立即购买</a>
       <a href="" class="btn-cat" data-count="${arr[i].count}">加入购物车</a>
    </div>
    </div>`
        }
        hl.innerHTML=hun;
        var getGwcs=document.getElementsByClassName("btn-cat");
        console.log(getGwcs);
        var user_id=localStorage.getItem("user_id");
        console.log(user_id);
          for(var getGwc of getGwcs){
            getGwc.onclick=function(){
              if(user_id){
              var product_id=this.parentNode.dataset.productcode;
              console.log(product_id);
            //   var input=this.parentNode.previousElementSibling.children[1];
             var count=parseInt(this.dataset.count);
             console.log(count);
              //var href=this.parentNode.parentNode.children[0].href;
              var href=this.parentNode.previousElementSibling.previousElementSibling.children[0].href;
               console.log(href)
              var productname=this.parentNode.parentNode.children[1].children[0].innerHTML;
             console.log(productname);
              var price=parseFloat(this.parentNode.parentNode.children[2].innerHTML.slice(1));
              console.log(price);
              var img=this.parentNode.parentNode.children[0].children[0].src;
             console.log(img);
            //console.log(product_id);
              $.ajax({
                url:"http://127.0.0.1:5050/shopping",
                type:"get",
                data:{user_id,product_id,count,href,productname,price,img},
                dataType:"json",
                success:function(result){
                  console.log(result);
                }
              })
            }else{
              alert("请登录");
            }
          }
        }
    
      
      }
    }

xhr.open("get","/product/alshunli",true);
xhr.send();