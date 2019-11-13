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
create table als_Product(
Id int primary key not null auto_increment,
CatagoryId int,   #所属分类编号
ProductCode int,  #产品编号
Price decimal(7,2),   #商品价格
ProductName varchar(128),   #商品简介
spec  varchar(64),    #商品描述
img  varchar(128),   #图片

ProductColor varchar(64), #商品颜色
count int,  #购买数量

ProductSpec varchar(64)  #商品规格
);


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