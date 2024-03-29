var funs={
  getHeader:function(callback){
    /*$.ajax({
      url:"header.html",
      type:"get",
      success:function(result){
        callback(result);
      }
    });*/
    return new Promise(function(resolve,reject){
      $.ajax({
        url:"header.html",
        type:"get",
        success:function(result){
          resolve(result)
        }
      });
    })
  },
  getAls:function(callback){
    $.ajax({
      url:"als.html",
      type:"get",
      dataType:"json",
      success:function(result){
        callback(result);
      }
    });
  },
  getDetails:function(productcode,callback){
    $.ajax({
      url:"http://127.0.0.1:5050/details",
      type:"get",
      data:{productcode},//{lid:lid}翻译=>?lid=1
      //实际发送的url: 
      //http://localhost:5050/details?lid=1
      dataType:"json",
      success:function(result){
        callback(result);
      }
    });
  }
}