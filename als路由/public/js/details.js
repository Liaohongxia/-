$("#a1")
 //console.log($("#a1"))
//2. 绑定事件处理函数
.on("click",".my-small",function(){
var $img=$(this);
//只有目标元素的class是my-small时
//if(e.target.className=="my-small"){
//3. 查找要修改的元素
$("#my-big")
//4. 修改元素
//取出当前小图片的data-target中缓存的对应大图片的路径，赋值给大图片的src属性
.attr(
    "src",$(this).attr("data-target")
   )
})
// var xhr=new XMLHttpRequest();
    
//     var $productcode=location.search.split("=")[1];
//     //console.log($productcode);
//     xhr.onreadystatechange=function(){
//         if(xhr.readyState==4&&xhr.status==200){  
//             var result=xhr.responseText;
//             console.log(result);
//             var arr=JSON.parse(result);
//             console.log(arr)       
// var hun="";
// for(var i=0;i<arr.length;i++){
//     console.log(arr)
// hun+=` <div class=" col-md-5 col-sm-12"> 
//                 <div class="mousetrap">
//                 <img class="mr-3 h-100 " id="my-big" src="${arr[i].img}" alt=""/>
//             </div>
//         </div>
//         <div class="col-md-7 col-sm-12">
//             <h4 class="">${arr[i].productname}</h4>
//             <ul class="p-0">
//                 <li class="pt-4">价格：<span class="ml-5">¥${arr[i].price}</span></li>
//                 <li id="guige_father">规格：<a class="ml-5 text-muted" href="" id="guige">${arr[i].spec}</a></li>
//                 <li>种类：<a class="ml-5 text-muted" href="" id="guige2">${arr[i].productspec}</a></li>
//                 <li>数量：<a class="ml-5" href=""></a>
//                     <button class="my_btn ml-3">-</button>
//                     <input class="w-60" type="text" value="1"/> 
//                     <button class="my_btn">+</button>
//                     <span id="kucun">库存：1000件</span>
//                 </li>
//             </ul>
//             <p>尚未选择</p>
//             <div>
//                 <a class="btn btn-dark font_small" href="" id="btn">立即购买</a>
//                 <a class="btn btn-dark font_small" href="shopping_cat.html" id="btn2">加入购物车</a>
//             </div>
//         </div>
//         <div class="col-md-12 col-m-12 px-0">
//             <div class="a2">
//                 <ul class="d-flex flex-nowrap nav " id="a1">
//                     <li class="nav-item p-0"><a class="nav-link px-0" href="javascript:;"><img src="${arr[i].img}" data-target="${arr[i].img}" class="my-small" alt=""/></a></li>
//                     <li class="nav-item p-0"><a class="nav-link px-0" href="javascript:;"><img src="${arr[i].img}" data-target="${arr[i].img}" class="my-small" alt=""/></a></li>
//                     <li class="nav-item p-0"><a class="nav-link px-0" href="javascript:;"><img src="${arr[i].img}" data-target="${arr[i].img}" class="my-small" alt=""/></a></li>
//                 </ul>
//             </div>
//         </div> 
//         <div class="col-md-5 col-m-12">
//             <a href="" class="pl-0 text-muted">产品详情</a>
//             <a href="" class="pl-3 text-muted">产品评论</a>
//         </div>`
//         // var guige=document.getElementById("guige");
//         // var guige_father=document.getElementById("guige_father")
//         //     var guige_father=guige.parentNode;
//         //     console.log(guige_father)
//         // console.log(guige);
//         // if(guige.innerHTML==null){
//         // guige_father.style.display=="none";}else{
//         //     guige_father.style.display=="block";
//         // }
//           }
//             aa.innerHTML=hun;  
//         }
//     }
//     xhr.open("get","/product/xiangqing/"+$productcode,true);
//     xhr.send();
//public/js/下新建details.js
//专门支持details页面所有功能
//在details.html中<body>底部引入js/details.js
$(function(){
    function callback(result){
     // console.log(result.pics);
      var product=result.product;
      var pics=result.pics;
      console.log(pics);
      var {sm,md,lg}=pics;
      var {productname, spec, price, productspec}=product;
      console.log(product);
      $("#ptitle").html(productname);
      $("#guige").html(spec);
      $("#pprice").html(`¥${price.toFixed(2)}`);
      $("#guige2").html(productspec);
      var html="";
      // console.log(product)
       var arr=Array.of(product);
     //console.log(product)
       for(var sp of arr){
     // console.log(sp);
          if(sp.spec&&sp.productspec)
           html+=`
           <li>规格：<a class="ml-5 text-muted  id="guige">${sp.spec}</a></li>
                         <li>种类：<a class="ml-5 text-muted" href="" id="guige2">${sp.productspec}</a></li>
           `    
             }
       var $ul=$("#gg").html(html);
      var html="";
     for(var b of pics){
         html+=`
      <img class="mr-3 h-100 " id="my-big" src="${b.sm}" alt=""/>`}
      var $div=$("#mouset").html(html);
      var html="";
      //遍历pics中每个图片对象
      for(var p of pics){
        //每遍历一个就拼接一个li元素到html中
        html+=`<li class="nav-item p-0"><a class="nav-link px-0" href="javascript:;"><img src="${p.sm}" data-target="${p.sm}" class="my-small" alt=""/></a></li>
        <li class="nav-item p-0"><a class="nav-link px-0" href="javascript:;"><img src="${p.md}" data-target="${p.md}" class="my-small" alt=""/></a></li>
        <li class="nav-item p-0"><a class="nav-link px-0" href="javascript:;"><img src="${p.lg}" data-target="${p.lg}" class="my-small" alt=""/></a></li>
        `
      }
      //35行: <ul id="ulImgs"
      var $ul=$("#a1").html(html)
       var html="";
       for(var i=0;i<pics.length;i++){
            html+=`
                <li class="p-1"><img class="w-75" src="${pics[i].sm}" alt=""/></li>
                <li class="p-1"><img class="w-75" src="${pics[i].md}" alt=""/></li>
                <li class="p-1"><img class="w-75" src="${pics[i].lg}" alt=""/></li>
                `
       }
      var $ul=$("#bottom").html(html);
//1查找触发事件的元素
var btns=document.getElementsByTagName("button");
   console.log(btns);
for(var btn of btns){
        //给按钮点击事
btn.onclick=function(){
//获得当前按钮的父元素
var td=this.parentNode;
console.log(td);
//获得input元素，是父元素的第二个直接子元素
var input=td.children[2];
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
        }
      }
    }
    //只有location.search不为""，才有必要执行后续操作
    if(location.search!==""){
      //location.search  "?lid=15"
      //                  [0] |[1]
      var productcode= 
        location.search.split("=")[1]
       // console.log(productcode)
      funs.getDetails(productcode,callback);
      
    }else{
      alert("商品编号productcode不能为空");
    }
    
  })    

