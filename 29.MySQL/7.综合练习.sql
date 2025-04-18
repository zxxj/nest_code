
-- 向 customers 表插入数据
INSERT INTO `customers` (`name`) 
    VALUES 
        ('张丽娜'),('李明'),('王磊'),('赵静'),('钱伟'),
        ('孙芳'),('周涛'),('吴洋'),('郑红'),('刘华'),
        ('陈明'),('杨丽'),('王磊'),('张伟'),('李娜'),
        ('刘洋'),('陈静'),('杨阳'),('王丽'),('张强');

-- 向 orders 表插入数据
INSERT INTO `orders` (`customer_id`, `order_date`, `total_amount`)
    VALUES
        (1, '2022-01-01',100.00),(1, '2022-01-02',200.00),
        (2, '2022-01-03',300.00),(2, '2022-01-04',400.00),
        (3, '2022-01-05',500.00),(3, '2022-01-06',600.00),
        (4, '2022-01-07',700.00),(4, '2022-01-08',800.00),
        (5, '2022-01-09',900.00),(5, '2022-01-10',1000.00);

-- 向 order_items 表插入数据
INSERT INTO `order_items` (`order_id`, `product_name`, `quantity`, `price`)
    VALUES
        (1, '耐克篮球鞋',1,100.00),
        (1, '阿迪达斯跑步鞋',2,50.00),
        (2, '匡威帆布鞋',3,100.00),
        (2, '万斯板鞋',4,50.00),
        (3, '新百伦运动鞋',5,100.00),
        (3, '彪马休闲鞋',6,50.00),
        (4, '锐步经典鞋',7,100.00),
        (5, '亚瑟士运动鞋',10,50.00),
        (5, '帆布鞋',1,100.00),
        (1, '苹果手写笔',2,50.00),
        (2, '电脑包',3,100.00),
        (3, '苹果手机',4,50.00),
        (4, '苹果耳机',5,100.00),
        (5, '苹果平板',7,100.00);
				
-- 查询
select * from customers;
select * from orders;
select * from order_items;

-- 1. 查询每个客户的订单总金额
select customers.name as '客户姓名', sum(orders.total_amount) as '所有订单总金额' from customers 
	inner join orders on customers.id = orders.customer_id
	group by customers.id
	order by sum(orders.total_amount) asc
	limit 0, 3;
	
-- 2.查询每个客户的订单总金额,并计算其占比
select customers.name as '客户姓名', sum(orders.total_amount) as '所有订单总金额',
	sum(orders.total_amount) / (select sum(total_amount) from orders) as '订单占比'
	from customers 
	inner join orders on customers.id = orders.customer_id
	group by customers.id
	order by sum(orders.total_amount) / (select sum(total_amount) from orders) asc
	limit 0,3
	
-- 3.查询出每个客户的订单总金额,并列出每个订单的商品清单
select customers.name as '客户姓名', sum(orders.total_amount) as '所有订单总金额' from customers 
	inner join orders on customers.id = orders.customer_id
	group by customers.id;q