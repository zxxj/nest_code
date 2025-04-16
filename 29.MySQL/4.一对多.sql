# 一对多

# 创建部门表
CREATE TABLE `department` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(255) NOT NULL COMMENT '部门名',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# 创建员工表
CREATE TABLE `employee` (
  `id` int NOT NULL AUTO_INCREMENT COMMENT 'id',
  `name` varchar(255) NOT NULL COMMENT '名字',
  `department_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  CONSTRAINT `department_id` FOREIGN KEY (`department_id`) REFERENCES `department` (`id`) ON DELETE SET NULL ON UPDATE SET NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

SELECT * FROM `employee`

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
		
INSERT INTO `employee` (`id`, `name`, `department_id`)
    VALUES 
        (1, '张三', 1),
        (2, '李四', 2), 
        (3, '王五', 3),
        (4, '赵六', 4),
        (5, '钱七', 5),
        (6, '孙八', 5),
        (7, '周九', 5),
        (8, '吴十', 8),
        (9, '郑十一', 9),
        (10, '王十二', 10);
				
# 查询部门id为5的所有员工
select * from department join employee on department.id = employee.department_id where department.id = 5;

select * from department left join employee on department.id = employee.department_id;

select * from department right join employee on department.id = employee.department_id;