const express=require('express');
//引入用户路由器
const user=require('./routers/user.js');
//引入商品路由器
const product=require('./routers/product.js');
//const productRouter=require('./routers/als.js');
//const details=require('./routers/details.js');
const shopping=require('./routers/shopping.js');
const cors=require("cors");
//引入中间件
const bodyParser = require('body-parser');
//创建web服务器
var app=express();
//设置监听端口
app.listen(5050);
app.use(cors({
    origin:["http://localhost:8080","http://127.0.0.1:5500"]//不能用*
  }));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
  extended: false
}));
//托管静态资源到public目录下
app.use(express.static('public'));
//使用路由器，挂载到user下 /user/reg
app.use('/user',user);
app.use('/product',product);
//app.use('/details',details);
app.use('/shopping',shopping);
//app.use('/als',alsRouter);
//使用路由器，挂载到product 下 /product/list
//app.use('/product',productRouter);