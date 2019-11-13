var xhr=new XMLHttpRequest();
//	var productcode=result.productcode;
xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){  
      var result=xhr.responseText;
     // console.log(result);
      var arr=JSON.parse(result);
   console.log(arr);
      // if(result==1){
      //     //console.log(result.data);
      //     var resc=result.data;
        //console.log(resc);
       //   localStorage.setItem("user_id",result.user);
var aa="";
for(var i=0;i<arr.length;i++){
console.log(arr.length)
aa+=`<div class="d1">
     <a href="${arr[i].href}" class="mx-0">
        <img src="${arr[i].img}" alt=""></a>
   <div class="d2"><a href="${arr[i].href}">${arr[i].productname}</a></div>
 </div>`
        }
        title.innerHTML=aa;
}
}
// }

xhr.open("get","/product/alstitle",true);
xhr.send();