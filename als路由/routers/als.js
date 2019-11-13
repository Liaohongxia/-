const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
router.get('als',(req,res)=>{
    //var $productcode=req.params.productcode;
    //var productcode=result[1].productcode;
    //console.log(productcode);
    var sql="select * from als_product";
    pool.query(sql,(err,result)=>{
        console.log(result);
        if(err) throw err;
        if(result.length>0){
            res.send(result);
        }else{
            res.send({code:0});
        }
    });
  });