#客户端连接服务器端
SET NAMES UTF8;
#丢弃数据库，如果存在的话
DROP DATABASE IF EXISTS als;
#服务器端创建数据库
CREATE DATABASE als CHARSET=UTF8;
#进入数据库
USE als;

#1.创建用户注册表
create table als_user(
id int primary key not null auto_increment,
uname varchar(32),
upwd varchar(32)

);
insert into als_user values(1,'yangyang','123456');
insert into als_user values(2,'dingding','123456');
insert into als_user values(3,'tangtang','123456');
#2.用户地址表
create table als_Address(
aid int primary key auto_increment, #编号
user_id int,  #用户编号
receiver varchar(16), #接收人姓名
province varchar(16),  #省
city varchar(16),   #市
county varchar(16),  #县
address varchar(128), #详细地址
cellphone varchar(16), #手机
delivery varchar(16),  #送货上门
img varchar(16),       #图片
pay varchar(16)     #支付方式
);

#3.商品类别表
create table als_Catagory(
fid int,  #编号
name varchar(64) #类别名称
);

#4.商品表
create table als_product(
Id int primary key not null auto_increment,
catagoryId int,   #所属分类编号
productcode int,  #产品编号
price decimal(7,2),   #商品价格
productname varchar(128),   #商品简介
spec  varchar(64),    #商品描述
img  varchar(128),   #图片
count int,  #购买数量
productspec varchar(64),
href varchar(128) #商品规格
);
insert into als_product values(null,1,1,220,"小雏菊","45x45","img/xcj.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=1");
insert into als_product values(null,1,2,480,"红色郁金香","65x35","als.pictures/鲜花/红色郁金香/1.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=2");
insert into als_product values(null,1,3,99,"爱丽思花苑店面陈列","50","als.pictures/鲜花/爱丽思花苑店面陈列/2.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=3");
insert into als_product values(null,1,4,580,"33支玫瑰花束","13x13","als.pictures/鲜花/33支玫瑰花束/1.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=4");
insert into als_product values(null,1,5,380,"29支香槟玫瑰花束","40cm","als.pictures/鲜花/29支香槟玫瑰花束/1.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=5");
insert into als_product values(null,1,6,280,"19支红玫瑰花束","35cm","als.pictures/鲜花/19支红玫瑰花束/1.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=6");
insert into als_product values(null,1,7,520,"19支白色郁金香花束","65x35","als.pictures/鲜花/19支白色郁金香花束/1.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=7");
insert into als_product values(null,1,8,180,"11支香槟玫瑰花束","65x35","als.pictures/鲜花/11支香槟玫瑰花束/xb.jpg",1,"多肉植物 搭配永生花","product_details.html?productcode=8");
insert into als_product values(null,2,9,99,"仲夏的梦",null,"als.pictures/婚礼布置/仲夏的梦/1.jpg",1,null,"product_details.html?productcode=9");
insert into als_product values(null,2,10,99,"长城脚下公社",null,"als.pictures/婚礼布置/长城脚下公社/1.jpg",1,null,"product_details.html?productcode=10");
insert into als_product values(null,2,11,99,"浮士德",null,"als.pictures/婚礼布置/浮士德/1.jpg",1,null,"product_details.html?productcode=11");
insert into als_product values(null,2,12,99,"君悦大酒店",null,"als.pictures/婚礼布置/君悦大酒店/1.jpg",1,null,"product_details.html?productcode=12");
insert into als_product values(null,2,13,99,"作品展示",null,"als.pictures/婚礼布置/作品展示/1.jpg",1,null,"product_details.html?productcode=13");
insert into als_product values(null,2,14,18000,"花-香江花园",null,"als.pictures/婚礼布置/花_香江花园/1.jpg",1,null,"product_details.html?productcode=14");
insert into als_product values(null,2,15,10800,"运河温泉度假村",null,"als.pictures/婚礼布置/运河温泉度假村/1.jpg",1,null,"product_details.html?productcode=15");
insert into als_product values(null,3,16,380,"结婚永生花",null,"als.pictures/homepape/结婚永生花.png",1,null,"product_details.html?productcode=16");
insert into als_product values(null,3,17,360,"礼盒永生花",null,"als.pictures/homepape/礼盒永生花.png",1,null,"product_details.html?productcode=17");
insert into als_product values(null,3,18,420,"心永生花",null,"als.pictures/homepape/心永生花.png",1,null,"product_details.html?productcode=18");
insert into als_product values(null,3,19,160,"爱你一生永生花",null,"als.pictures/homepape/爱你一生永生花.png",1,null,"product_details.html?productcode=19");
insert into als_product values(null,4,20,360,"绿植花束",null,"als.pictures/homepape/绿植花束.jpg",1,null,"product_details.html?productcode=20");
insert into als_product values(null,4,21,99,"肉肉绿植",null,"als.pictures/homepape/肉肉绿植.jpg",1,null,"product_details.html?productcode=21");
#图片
create table als_laptop_pic(
pid int primary key not null auto_increment,
laptop_id int,  #产品编号
sm varchar(128),
md varchar(128), #图片路径
lg varchar(128)

);
insert into als_laptop_pic values
(null,1,'als.pictures/鲜花/小雏菊/1.jpg','als.pictures/鲜花/小雏菊/2.jpg','als.pictures/鲜花/小雏菊/xcj.jpg'),
(null,2,'als.pictures/鲜花/红色郁金香/1.jpg','als.pictures/鲜花/红色郁金香/2.jpg','als.pictures/鲜花/红色郁金香/3.jpg'),
(null,2,'als.pictures/鲜花/红色郁金香/4.jpg','als.pictures/鲜花/红色郁金香/5.jpg','als.pictures/鲜花/红色郁金香/6.jpg'),
(null,3,'als.pictures/鲜花/爱丽思花苑店面陈列/2.jpg','als.pictures/鲜花/爱丽思花苑店面陈列/3.jpg','als.pictures/鲜花/爱丽思花苑店面陈列/4.jpg'),
(null,3,'als.pictures/鲜花/爱丽思花苑店面陈列/5.jpg','als.pictures/鲜花/爱丽思花苑店面陈列/6.jpg','als.pictures/鲜花/爱丽思花苑店面陈列/7.jpg'),
(null,4,'als.pictures/鲜花/33支玫瑰花束/1.jpg','als.pictures/鲜花/33支玫瑰花束/2.jpg','als.pictures/鲜花/33支玫瑰花束/3.jpg'),
(null,5,'als.pictures/鲜花/29支香槟玫瑰花束/1.jpg','als.pictures/鲜花/29支香槟玫瑰花束/2.jpg','als.pictures/鲜花/29支香槟玫瑰花束/3.jpg'),
(null,6,'als.pictures/鲜花/19支红玫瑰花束/1.jpg','als.pictures/鲜花/19支红玫瑰花束/2.jpg','als.pictures/鲜花/19支红玫瑰花束/3.jpg'),
(null,7,'als.pictures/鲜花/19支白色郁金香花束/4.jpg','als.pictures/鲜花/19支白色郁金香花束/5.jpg','als.pictures/鲜花/19支白色郁金香花束/6.jpg'),
(null,8,'als.pictures/鲜花/11支香槟玫瑰花束/xb.jpg','als.pictures/鲜花/11支香槟玫瑰花束/2.jpg',null),
(null,9,'als.pictures/婚礼布置/仲夏的梦/2.jpg','als.pictures/婚礼布置/仲夏的梦/9.jpg','als.pictures/婚礼布置/仲夏的梦/3.jpg'),
(null,9,'als.pictures/婚礼布置/仲夏的梦/4.jpg','als.pictures/婚礼布置/仲夏的梦/5.jpg','als.pictures/婚礼布置/仲夏的梦/6.jpg'),
(null,10,'als.pictures/婚礼布置/长城脚下公社/1.jpg','als.pictures/婚礼布置/长城脚下公社/2.jpg','als.pictures/婚礼布置/长城脚下公社/3.jpg'),
(null,10,'als.pictures/婚礼布置/长城脚下公社/4.jpg','als.pictures/婚礼布置/长城脚下公社/5.jpg','als.pictures/婚礼布置/长城脚下公社/6.jpg'),
(null,11,'als.pictures/婚礼布置/浮士德/1.jpg','als.pictures/婚礼布置/浮士德/11.jpg','als.pictures/婚礼布置/浮士德/3.jpg'),
(null,11,'als.pictures/婚礼布置/浮士德/4.jpg','als.pictures/婚礼布置/浮士德/5.jpg','als.pictures/婚礼布置/浮士德/6.jpg'),
(null,12,'als.pictures/婚礼布置/君悦大酒店/1.jpg','als.pictures/婚礼布置/君悦大酒店/2.jpg','als.pictures/婚礼布置/君悦大酒店/3.jpg'),
(null,12,'als.pictures/婚礼布置/君悦大酒店/4.jpg','als.pictures/婚礼布置/君悦大酒店/5.jpg','als.pictures/婚礼布置/君悦大酒店/8.jpg'),
(null,13,'als.pictures/婚礼布置/作品展示/1.jpg','als.pictures/婚礼布置/作品展示/2.jpg','als.pictures/婚礼布置/作品展示/3.jpg'),
(null,13,'als.pictures/婚礼布置/作品展示/4.jpg','als.pictures/婚礼布置/作品展示/18.jpg','als.pictures/婚礼布置/作品展示/6.jpg'),
(null,14,'als.pictures/婚礼布置/花_香江花园/1.jpg','als.pictures/婚礼布置/花_香江花园/44.jpg','als.pictures/婚礼布置/花_香江花园/45.jpg'),
(null,14,'als.pictures/婚礼布置/花_香江花园/4.jpg','als.pictures/婚礼布置/花_香江花园/5.jpg','als.pictures/婚礼布置/花_香江花园/6.jpg'),
(null,15,'als.pictures/婚礼布置/运河温泉度假村/1.jpg','als.pictures/婚礼布置/运河温泉度假村/2.jpg','als.pictures/婚礼布置/运河温泉度假村/3.jpg'),
(null,15,'als.pictures/婚礼布置/运河温泉度假村/4.jpg','als.pictures/婚礼布置/运河温泉度假村/5.jpg','als.pictures/婚礼布置/运河温泉度假村/6.jpg'),
(null,16,'als.pictures/homepape/结婚永生花.png',null,null),
(null,17,'als.pictures/homepape/礼盒永生花.png',null,null),
(null,18,'als.pictures/homepape/心永生花.png',null,null),
(null,19,'als.pictures/homepape/爱你一生永生花.png',null,null),
(null,20,'als.pictures/homepape/绿植花束.jpg',null,null),
(null,21,'als.pictures/homepape/肉肉绿植.jpg',null,null);

#5.保存购物车标，关联到用户表商品表
create table als_shopping_cat(
cid int primary key not null auto_increment, 
user_id int,  #用户编号
img varchar(128),  #图片
product varchar(32), #商品名称
product_id int, #商品编号
Price decimal(7,2),   #商品价格
href VARCHAR(128),
count int,  #购买数量
sub int,  
foreign key(user_id) references als_User(id)
);
insert into als_shopping_cat values(null,1,"img/xcj.jpg","小雏菊 45x45 多肉植物 搭配永生花",1,"220","1",220);
insert into als_shopping_cat values(null,1,"img/1.jpg","33支玫瑰花束 65x35 多肉植物 搭配永生花",2,"580","1",580);
insert into als_shopping_cat values(null,2,"img/yjx.jpg","19支白色郁金香花束 45x45 多肉植物 搭配永生花",3,"520","1",520);
insert into als_shopping_cat values(null,3,"img/xb.jpg","11支香槟玫瑰花束 45x45 多肉植物 搭配永生花",4,"180","1",180);

#6.创建订单表
create table als_order(
did int primary key not null auto_increment,
user_id int, #用户编号
address varchar(200),
status int,  #订单状态  1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消
order_time bigint,  #下单时间
pay_time bigint,     #付款时间

OrderAmount int  #订单金额

);

#7.订单详情表，关联到订单表
create table als_order_form(
did int primary key not null auto_increment,
order_id int,  #订单编号
product_id int,  #产品编号
count int  #购买数量
);

#8.首页轮播图表
create table als_carousel(
cid int primary key not null auto_increment,
img varchar(128),  #图片
href varchar(128)  #图片链接
);