const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//根据用户名称查询是否可以注册get
router.get("/v1/checkuname/:uname",(req,res)=>{
  var $uname=req.params.uname;
  var sql="select * from als_user where uname=?";
  pool.query(sql,[$uname],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send("1");
    }else{
      res.send("0")
    }
  });
});
//添加注册路由；
router.post("/v1/register",function(req,res){
	console.log(req.body);
  var $uname=req.body.uname;
  var $upwd=req.body.upwd;
   if (!$uname){res.send("name未接收");return;}
   if (!$upwd){res.send("password未接收");return;}
   var sql="insert into als_user values(null,?,?)";
   pool.query(sql,[$uname,$upwd],(err,result)=>{
     if(err) throw err;
	 console.log(result);
	    if (result.affectedRows>0)
	    {res.send("1");
	    }else{
		   res.send("0");
			}
   });
});
//添加登录路由
router.get('/login/:uname&:upwd',(req,res)=>{
  var $uname=req.params.uname;
  var $upwd=req.params.upwd;
  if (!$uname){res.send("name未接收");return;}
   if (!$upwd){res.send("password未接收");return;}
  console.log($uname,$upwd);
  var sql="select * from als_user where uname=? and upwd=?";
  pool.query(sql,[$uname,$upwd],(err,result)=>{
     // console.log(result);
      if(err) throw err;
      if(result.length>0){
        res.send({code:1,user:result[0].id});
      }else{
        res.send({code:0});
      }
  });
});
router.get('/shoppingcat/:user_id',(req,res)=>{
  var $user_id=req.params.user_id;
  //console.log($user_id);
  var sql="select * from als_shopping_cat where user_id=?";
  pool.query(sql,[$user_id],(err,result)=>{
     // console.log(result);
      if(err) throw err;
      if(result.length>0){
          res.send({code:1,data:result});
      }else{
          res.send({code:0});
      }
  });
});
module.exports=router;
