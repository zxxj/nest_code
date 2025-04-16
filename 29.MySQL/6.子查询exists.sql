insert into student (name, gender, age, class, score) values 
        ('张三', '男',18, '一班',90),
        ('李四', '女',19, '二班',85),
        ('王五', '男',20, '三班',70),
        ('赵六', '女',18, '一班',95),
        ('钱七', '男',19, '二班',80),
        ('孙八', '女',20, '三班',75),
        ('周九', '男',18, '一班',85),
        ('吴十', '女',19, '二班',90),
        ('郑十一', '男',20, '三班',60),
        ('王十二', '女',18, '一班',95),
        ('赵十三', '男',19, '二班',75),
        ('钱十四', '女',20, '三班',80),
        ('孙十五', '男',18, '一班',90),
        ('周十六', '女',19, '二班',85),
        ('吴十七', '男',20, '三班',70),
        ('郑十八', '女',18, '一班',95),
        ('王十九', '男',19, '二班',80),
        ('赵二十', '女',20, '三班',75);
				
select * from student;

# 查询最高分学生的信息，姓名、班级、成绩
select max(score) from student;

select name as 姓名, class as 班级, score as 成绩 from student where score = 95;

# 能不能把这两个sql合并呢? 可以,这就是子查询
select name as 姓名, class as 班级, score as 成绩 from student where score = (select max(score) from student);

select * from student where score > (select avg(score) from student);

select * from department;

INSERT INTO `department` (`id`, `name`) 
    VALUES 
        (1, '人事部'),
        (2, '财务部'),
        (3, '市场部'),
        (4, '技术部'),
        (5, '销售部'),
        (6, '客服部'),
        (7, '采购部'),
        (8, '行政部'),
        (9, '品控部'),
        (10, '研发部');
				
select * from employee;

INSERT INTO `employee` (`id`, `name`, `department_id`)
    VALUES 
        (1, '张三', 1),
        (2, '李四', 2), 
        (3, '王五', 3),
        (4, '赵六', 5),
        (5, '钱七', 5),
        (6, '孙八', 5),
        (7, '周九', 5),
        (8, '吴十', 8),
        (9, '郑十一', 9),
        (10, '王十二', 10);
		
# 查询有员工的部门
# 对每个department,在子查询里查询它所有的employee,如果存在员工那么条件成立,就返回这个部门的name,这就是exists的作用. 条件成立/反之不成立
select name from department where exists (select * from employee where department.id = employee.department_id)

# 查询没有员工的部门 NOT EXISTS
select name from department where not exists(select * from employee where department.id = employee.department_id)


# exists子查询也可以在update insert delete语句中使用
select * from product;
# 向产品表添加数据
INSERT INTO product (id, name, price, category, stock)
	VALUES 
		(1, 'iPhone12',6999.00, '手机',100),
		(2, 'iPad Pro',7999.00, '平板电脑',50),
		(3, 'MacBook Pro',12999.00, '笔记本电脑',30),
		(4, 'AirPods Pro',1999.00, '耳机',200),
		(5, 'Apple Watch',3299.00, '智能手表',80);
		
# select: 查询价格最高的商品
select name as 产品名称, price as 价格 from product where price = (select max(price) from product)

# insert: 将产品表里的分类和平均价格插入到avg_price_by_category表
insert into avg_price_by_category (category, avg_price)
select category, avg(price) from product group by category;

select * from avg_price_by_category;

# update: 将销售部下的全部员工名字前加上"销售部-"
update employee set name = concat('销售部-', name)
	where department_id = (select id from department where name = '销售部')
	
# delete: 删除所有销售部的员工
delete from employee where department_id = (select id from department where name = '销售部')