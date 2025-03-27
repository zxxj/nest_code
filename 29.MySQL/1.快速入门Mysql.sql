# 创建表
CREATE TABLE `student` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `name` varchar(45) NOT NULL COMMENT '名字',
  `age` int DEFAULT NULL COMMENT '年龄',
  `sex` int DEFAULT NULL COMMENT '性别',
  `email` varchar(60) DEFAULT NULL COMMENT '邮箱',
  `create_time` datetime NOT NULL COMMENT '创建时间',
  `status` int DEFAULT '0' COMMENT '是否删除',
  PRIMARY KEY (`id`)
) CHARSET=utf8mb4

# 查询student表中的所有数据
SELECT * FROM `student`

# 向student表中插入一条数据.
insert into `1.hello_mysql`.`student` (`name`, `age`, `sex`, `email`, `create_time`) values ('xin', '18', '1', '123456@qq.com', '2025-03-27')

insert into `student` (`name`, `age`, `sex`, `email`, `create_time`) values ('xin2', '18', '1', '123456@qq.com', '2025-03-27')

# 根据id删除sutdent表中id为3的数据
delete from `1.hello_mysql`.`student` where (`id` = '3');

# 根据id更新student表中某个字段的数据
update `1.hello_mysql`.`student` set `email` = '666@qq.com' where (`id` = '5');

# 清空sutdent表中的所有数据
truncate `student`;

# 删除student表
drop table `student`;