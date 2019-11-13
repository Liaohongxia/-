var i=0;
var LIWIDTH=996;
var DURATION=500;
var LICOUNT=3;
var ulImgs=document.getElementById("ul-imgs");
var ulIdxs=document.getElementById("ul-idxs");
var lis=ulIdxs.children;
function moveTo(to){
  if(to==undefined){
    to=i+1;
  }
  if(i==0){
    if(to>i){
      ulImgs.className="transition";
    }else{
      ulImgs.className="";
      ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
      setTimeout(function(){
        moveTo(LICOUNT-1);
      },100);
      return;
    }
  }
  i=to;
  ulImgs.style.marginLeft=-i*LIWIDTH+"px";
  for(var li of lis){
    li.className=""
  }
  console.log(i);
  if(i==LICOUNT){
    i=0;
    setTimeout(function(){
      ulImgs.className="";
      ulImgs.style.marginLeft=0;
    },DURATION)
  }
  lis[i].className="active";
}

var btnLeft=document.getElementById("btn-left");
var btnRight=document.getElementById("btn-right");
var canClick=true;
btnRight.onclick=function(){
  move(1)
}
function move(n){
  if(canClick){
    console.log(i+n);
    moveTo(i+n);
    canClick=false;
    setTimeout(function(){
      canClick=true;
    },DURATION+100);
  }
}
btnLeft.onclick=function(){
  move(-1);
}

var interval=3984;
var timer=setInterval(function(){
  moveTo()
},3000);
var banner=document.getElementById("banner");
banner.onmouseover=function(){
  clearInterval(timer);
}
banner.onmouseout=function(){
  timer=setInterval(function(){
    moveTo()
  },3000);
}

var ulIdxs=document.getElementById("ul-idxs");
var canClick=true;
ulIdxs.onclick=function(e){
  if(canClick){
    var li=e.target;
    if(li.nodeName=="LI"){
      if(li.className!=="active"){
        for(var i=0;i<lis.length;i++){
          if(lis[i]==li){
            break;
          }
        }
        moveTo(i);
        setTimeout(function(){
          canClick=true;
        },DURATION);
      }
    }
  }
    }

    var xhr=new XMLHttpRequest();
//	var productcode=result.productcode;
xhr.onreadystatechange=function(){
  if(xhr.readyState==4&&xhr.status==200){  
      var result=xhr.responseText;
      //console.log(result);
      var arr=JSON.parse(result);
   console.log(arr);
      // if(result==1){
      //     //console.log(result.data);
      //     var resc=result.data;
        //console.log(resc);
                 //   localStorage.setItem("user_id",result.user);
                 var index_five=document.getElementsByClassName("index_five")[0];
                // console.log(index_five);
var aa="";
for(var i=15;i<19;i++){
console.log(arr.length)
aa+=`<div class="a1">
<a href="${arr[i].href}"><img src="${arr[i].img}" alt=""></a>
       <div class="a1_1"><a href="${arr[i].href}">${arr[i].productname}</a></div>
                  <p>¥${arr[i].price}</p>
        </div>`
        }
        index_five.innerHTML=aa;
        var bb="";
for(var i=19;i<21;i++){
//console.log(arr.length)
bb+=`<div class="a1">
<a href="${arr[i].href}"><img src="${arr[i].img}" alt=""></a>
       <div class="a1_1"><a href="${arr[i].href}">${arr[i].productname}</a></div>
                  <p>¥${arr[i].price}</p>
        </div>`
        }
        ind.innerHTML=bb;	
        var cc="";
        for(var i=8;i<12;i++){
//console.log(arr.length)
cc+=`<div class="a1">
<a href="${arr[i].href}"><img src="${arr[i].img}" alt=""></a>
       <div class="a1_1"><a href="${arr[i].href};">${arr[i].productname}</a></div>
                  <p>¥${arr[i].price}</p>
        </div>`
        }	
        ins.innerHTML=cc;
     }
}


xhr.open("get","/product/alsshouye",true);
xhr.send();
