# 创建student表
CREATE TABLE student(
		# id为主键,设置自动增长
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT 'Id',
		
		# 名字,非空
    name VARCHAR(50) NOT NULL COMMENT '学生名',
		
		# 性别,非空
    gender VARCHAR(10) NOT NULL COMMENT '性别',
		
		# 年龄,非空
    age INT NOT NULL COMMENT '年龄',
		
		# 班级,非空
    class VARCHAR(50) NOT NULL COMMENT '班级名',
		
		# 分数,非空
    score INT NOT NULL COMMENT '分数'
) CHARSET=utf8mb4

# 查询student表中所有数据
select * from `student`;

# 插入数据
INSERT INTO student (name, gender, age, class, score)
    VALUES 
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
				

# 查询指定列,只查询student表中的name和age字段
select name, age from student;

# 可以通过as修改返回的列名, 例如返回的列名默认是age,可以通过 as 指定你想返回的列名
select name as '姓名', age as '年龄' from student;

# where条件查询,查询student表中所有年龄大于19的数据
select * from student where age >= 19;

select name as '姓名', age as '年龄', score as '分数' from student where age >= 19;

# 并且条件可以是and连接的多个
select name as '姓名', age as '年龄', score as '分数' from student where age >= 20 and score >= 60;

# like模糊查询,查询所有王开头的学生
select * from student where name like '王%';

# in指定集合查询,查询所有一班二班下的学生
select * from student where class in ('一班', '二班');

# not in, 排除集合内指定的班级,例如有一班、二班、三班, not in里写了一班和二班,查出的数据就全是三班的
select * from student where class not in ('一班', '二班');

# between and指定一个区间查询, 例如查询18岁到30岁的学生
select * from student where age between 18 and 30;

# limit分页返回, 例如如果觉得数据太多,可以分页返回,比如从0开始的5个
select * from student limit 0,5;
# 可以简写为
select * from student limit 5;
# 第二页的数据
select * from student limit 5,5;

# order by指定排序列, 例如根据score升序排列,如果score相同再根据age降序排列
select name, score, age from student order by score asc, age desc;

# group by分组统计和内置函数AVG, 例如根据班级来分组,求平均成绩
# 根据班级来分组是 group by class
# 求平均成绩是用内置函数AVG
# 之后根据平均成绩来降序排列
select class as '班级', AVG(score) as '平均成绩' from student group by class order by 平均成绩 desc;

# 分组后使用having进行过滤数据,例如获取平均成绩大于90的数据
select class as '班级', AVG(score) as avg_score from student group by class having avg_score > 90;


# distinct 去重,例如想查看有那些班级,可能会这样写,但这样会查出重复的
select distinct class from student;

# 聚合函数: 用于对数据的统计,比如AVG COUNT SUM MIN MAX
select avg(score) as '平均成绩' from student;

select count(*) as '人数' from student; 

select sum(score) as '总分数' from student;

select min(score) as '最低分' from student;

select max(score) as '最高分' from student;

# 字符串函数: 用于对字符串的处理,比如concat substr length upper lower
select concat('x', name, 'w') as '拼接字符串' from student;

select substr(name, 1, 4) as '截取字符串' from student;

select length(name) as '字节长度,一个汉字是3个字符' from student;

select upper('aa') as '转换为大写' from student;

select lower('CC') as '转换为小写' from student;


# 数值函数: 用于对数值的处理,比如round ceil floor abs mod
select round(1.53333) as '四舍五入';

select ceil(2.1) as '向上取整';

select floor(3.9) as '向下取整'; 

select abs(-6.554125) as '绝对值';

select mod(10, 4) as '取模';


# 日期函数: 对日期、时间进行处理,比如date time year month day
select date('2025-03-27 16:42:35') as '日期'; # 2025-03-27

select time('2025-03-27 16:42:35') as '时间'; # 16:42:35

select year('2025-03-27 16:42:35') as '年'; # 2025

select month('2025-03-27 16:42:35') as '月'; # 3

select day('2025-03-27 16:42:35') as '日'; # 27


## 条件函数: 根据条件是否成立返回不同的值,比如 if case

# if函数 适合单个条件
select name, if(score >= 90, '很优秀', '加油') as '评价' from student;

# if case 适合多个条件
select name, score, case when score >= 90 then '优秀' when score >= 60 then '及格了' else '没及格' end as '评价' from student;


# 系统函数: 用于获取系统信息,比如version database user
select version() as '获取当前mysql的版本';

select database() as '获取当前正在使用的数据库名称';

select user() as '获取当前mysql会话的用户';


# 其他函数: nullif coalesce greatest least 
select nullif(1,1), nullif(1,2) as '如果相等则返回null,不相等返回第一个值';

select coalesce(null, null, 3), coalesce(null, null, null, null, '啊', null, '会返回我吗？') as '返回第一个非null的值';

select greatest(1,2,'999',3,4) as '返回几个值中最大的'; 

select least(99,22,11,3,44,55) as '返回几个值中最小的';

# 日期格式转换
select date_format('2025-03-27', '%Y年%m月%d日');
select str_to_date('2025-03-27', '%Y-%m-%d');