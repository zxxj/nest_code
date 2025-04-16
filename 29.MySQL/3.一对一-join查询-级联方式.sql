# 用户表
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT '用户ID',
  `name` varchar(255) COLLATE utf8mb4_0900_as_ci NOT NULL COMMENT '姓名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_as_ci;

# 信息表
CREATE TABLE `id_card` (
  `id` int NOT NULL AUTO_INCREMENT,
  `card_name` varchar(255) COLLATE utf8mb4_0900_as_ci NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `user_id` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_as_ci;

SELECT * FROM `id_card`

select * from id_card;

select * from user;

insert into `user` (`name`) values 
		('张三'),
		('李四'),
		('王五'),
		('赵六'),
		('孙七'),
		('周八'),
		('吴九'),
		('郑十'),
		('钱十一'),
		('陈十二');
		
insert into id_card (card_name, user_id) values
  ('110101199001011234',1),
	('310101199002022345',2),
	('440101199003033456',3),
	('440301199004044567',4),
	('510101199005055678',5),
	('330101199006066789',6),
	('320101199007077890',7),
	('500101199008088901',8),
	('420101199009099012',9),
	('610101199010101023',10);
	
	# 多表关联查询 join on
	# join on默认就是 inner join on, 默认只能返回两个表中能关联上的数据
	select * from user join id_card on user.id = id_card.user_id; 
	# 等同于:	
	select * from user inner join id_card on user.id = id_card.user_id;
	
	select user.id, name, id_card.id as card_id, card_name from user join id_card on user.id = id_card.user_id;
	
	# 在from后的是左表, join后的是右表
	
	# left join, 额外返回左表中没有关联上的数据
	select user.id, name, id_card.id as card_id, card_name from user left join id_card on user.id = id_card.user_id;
	
	# right join, 额外返回右表中没有关联上的数据
	select user.id, name, id_card.id as card_id, card_name from user right join id_card on user.id = id_card.user_id;