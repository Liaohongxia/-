const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建路由器对象
var router=express.Router();
//插入购物车的数据
router.get("/",(req,res)=>{
	//console.log(ddddddddddddddddddddddddd);
	var user_id=req.query.user_id;
	var product_id=req.query.product_id;
	var count=req.query.count;
	var img=req.query.img;
	var product=req.query.productname;
	var price=req.query.price;
	var href=req.query.href;
	
	//console.log(user_id,product_id,img,product,price,href,count)
	var sql="select cid from als_shopping_cat where user_id=? and product_id=?";
	pool.query(sql,[user_id,product_id],(err,result)=>{
		if(err) throw err;
    if(result.length==0){//说明用户没有买过该商品
			var sql=`insert into als_shopping_cat values(null,${user_id},'${img}','${product}',${product_id},${price},'${href}',${count},null)`;
		}else{
			var sql=`update als_shopping_cat set count=${count} where user_id=${user_id} and product_id=${product_id}`;
		}
		pool.query(sql,(err,result)=>{
			if (err) console.log(err);
			console.log(result);
			//res.send({code:1,msg:"添加成功"})
		})
	})
})
module.exports=router;