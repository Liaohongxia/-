var n=localStorage.getItem("uname");
var $user_id=localStorage.getItem("user_id")
$("#tuichu").click(function(){
    localStorage.clear();
})
//console.log($user_id);
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
    if(xhr.readyState==4&&xhr.status==200){  
        var result=xhr.responseText;
        // console.log(result);
        var result=JSON.parse(result);
    // console.log(result);
        if(result.code==1){
            //console.log(result.data);
            var resc=result.data;
        //console.log(resc);
        //   localStorage.setItem("user_id",result.user);
var html="";
for(var item of resc){
html+=`<div class="col-md-12 col-sm-12">
<div class="media border p-3">
        <input type="checkbox" id="check"/>
        <img class="w-4" src="${item.img}" alt=""/>
    <div class="media-body">
    <p class="mb-0">
        <a class="text-muted font_small ml-3" href="">${item.product}</a>
    </p>
    <div> 
    <span class="font_small text-muted mb-0 ml-3">${item.Price}</span>
    <span class="font_small text-muted mb-0 ml-3">￥${item.sub}</span>
    </div>
    <div class="d-flex justify-content-left align-items-center mb-3">
        <button class="my_btn ml-3">-</button>
        <input class="w-60" type="text" value="${item.count}"/>
        <button class="my_btn">+</button>
    </div>
    </div>
</div>
</div>`;
}
d1.innerHTML=html;
//1查找触发事件的元素
var btns=document.getElementsByTagName("button");
var div=document.getElementById("d1");
//console.log(div);
    //console.log(btns);
for(var btn of btns){
        //给按钮点击事
btn.onclick=function(){
//获得当前按钮的父元素
var td=this.parentNode;
//console.log(td);
//获得input元素，是父元素的第二个直接子元素
var input=td.children[1];
// console.log(input);
//获得input元素的内容
var s=parseInt(input.value);
// console.log(s);
//判断如果btn中的内容是+,就在input的内容中加1
if(this.innerHTML=="+"){
    s++;
}else if(this.innerHTML=="-"&&s>1){
    s--;
        }
        //最后把获得的数量放入input内容中
    input.value=s; 
    var price=parseFloat(td.previousElementSibling.children[0].innerHTML);
 //console.log(price)
    //单价乘以数量
var subtotal=price*s;
//console.log(subtotal);
td.previousElementSibling.children[1].innerHTML="￥"+subtotal.toFixed(2);
var spans=div.querySelectorAll("span:last-child");
//console.log(spans)
var subs=document.getElementById("zongjia");
var last_td=subs.querySelector("ul>li:last-child");
var total=0;
for(var span of spans){
    //每遍历一个td，就获取td的内容，去掉开头￥，转为浮点数，累加到total中
    total+=parseFloat(span.innerHTML.slice(1))
    console.log(total)
     }
     //将总计放入tfoot中最后一个格中
     last_td.innerHTML=`￥${total.toFixed(2)}`;
        }
      }        
    }
  }
}
xhr.open("get","/user/shoppingcat/"+$user_id,true);
xhr.send();