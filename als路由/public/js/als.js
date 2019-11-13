//在public/js/下新建als.js
//专门支持首页中所有功能
//在public/index.html中<body>底部引入js/index.js
$(function(){
  function callback(result){
    //console.log(result);
    var arr=result;
    // console.log(p1);
    // var {title, details, price, href, pic}=p1
    //注释index.html中58行~68行的HTML片段
    //并将index.html中58行~68行的HTML片段复制到此
    var aa="";
for(var i=15;i<19;i++){
	console.log(arr.length)
aa+=`<div class="a1">
	<a href="${arr[i].href}"><img src="${arr[i].img}" alt=""></a>
           <div class="a1_1"><a href="${arr[i].href}">${arr[i].productname}</a></div>
					  <p>¥${arr[i].price}</p>
			</div>`
			}
			$(index_five).appendTo("#aa");
			var bb="";
	for(var i=19;i<21;i++){
	//console.log(arr.length)
bb+=`<div class="a1">
	<a href="${arr[i].href}"><img src="${arr[i].img}" alt=""></a>
           <div class="a1_1"><a href="${arr[i].href}">${arr[i].productname}</a></div>
					  <p>¥${arr[i].price}</p>
			</div>`
			}
			$(ind).appendTo("#bb");	
			var cc="";
			for(var i=8;i<12;i++){
	//console.log(arr.length)
cc+=`<div class="a1">
	<a href="${arr[i].href}"><img src="${arr[i].img}" alt=""></a>
           <div class="a1_1"><a href="${arr[i].href};">${arr[i].productname}</a></div>
					  <p>¥${arr[i].price}</p>
			</div>`
			}	
	
    $(ins).appendTo("#cc");
  }
  funs.getAls(callback);
})