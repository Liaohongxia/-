//在public/js/创建header.js
//在public/index.html中<body>底部引入header.js
//<script src="js/header.js">
$(function(){//DOMContentLoaded
  function callback(result){
    $(result).replaceAll("header");
    $(`<link rel="stylesheet" href="css/header.css">`).appendTo("head");
  }
  //funs.getHeader(callback);
  funs.getHeader().then(callback)
})//不要加()，这不是自调，这是事件绑定
