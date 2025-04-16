# 创建文章表
CREATE TABLE `article` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# 创建标签表
CREATE TABLE `tag` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

# 创建中间表
CREATE TABLE `article_tag` (
  `article_id` int NOT NULL,
  `tag_id` int NOT NULL,
  PRIMARY KEY (`article_id`,`tag_id`),
  KEY `tag_id` (`tag_id`),
  CONSTRAINT `article_id` FOREIGN KEY (`article_id`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `tag_id` FOREIGN KEY (`tag_id`) REFERENCES `tag` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

select * from article;
select * from tag;
select * from article_tag;

# 向文章表中添加数据
INSERT INTO `article` (`title`, `content`)
    VALUES
            ('文章1', '这是文章1的内容。'),
            ('文章2', '这是文章2的内容。'),
            ('文章3', '这是文章3的内容。'),
            ('文章4', '这是文章4的内容。'),
            ('文章5', '这是文章5的内容。');
						
# 向标签表添加数据
INSERT INTO `tag` (`name`)
    VALUES
            ('标签1'),
            ('标签2'),
            ('标签3'),
            ('标签4'),
            ('标签5');
						
# 向中间表插入数据
INSERT INTO `article_tag` (`article_id`, `tag_id`)
    VALUES
    (1,1), (1,2), (1,3),
    (2,2), (2,3), (2,4),
    (3,3), (3,4), (3,5),
    (4,4), (4,5), (4,1),
    (5,5), (5,1), (5,2);
		
# 关联查询
# 查询所有id为1的article
select * from article a join article_tag at on a.id = at.article_id join tag t on t.id = at.tag_id where a.id = 1;

# 指定返回的列
select t.name as 标签名, a.title as 文章名 from article a 
join article_tag at on a.id = at.article_id
join tag t on t.id = at.tag_id
where a.id = 1;

delete from article where id = 1;

select * from tag where id = 1;