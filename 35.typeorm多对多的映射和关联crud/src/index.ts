import { AppDataSource } from './data-source';
import { Article } from './entity/Article';
import { Tag } from './entity/Tag';

AppDataSource.initialize()
  .then(async () => {
    const tag1 = new Tag();
    tag1.name = '程序员';

    const tag2 = new Tag();
    tag2.name = '建筑师';

    const tag3 = new Tag();
    tag3.name = '保安';

    const a1 = new Article();
    (a1.title = '文章1'), (a1.content = '文章1内容'), (a1.tags = [tag1, tag2]);

    const a2 = new Article();
    a2.title = '文章2';
    a2.content = '文章2内容';
    a2.tags = [tag1, tag2, tag3];

    // await AppDataSource.manager.save(Tag, [tag1, tag2, tag3]);
    // await AppDataSource.manager.save(Article, [a1, a2]);

    // 1. 查询
    // const articles = await AppDataSource.manager.find(Article, {
    //   relations: {
    //     tags: true,
    //   },
    // });
    // console.log(articles);
    // console.log(articles.map((item) => item.tags));

    // 2.query builder来join查询
    // const articles = await AppDataSource.manager
    //   .createQueryBuilder(Article, 'article')
    //   .leftJoinAndSelect('article.tags', 't')
    //   .getMany();

    // console.log(articles);
    // console.log(articles.map((item) => item.tags));

    // 3.或者先拿到 Article 的 Repository 再创建 query builder 来查询也行
    // const articles = await AppDataSource.getRepository(Article)
    //   .createQueryBuilder('article')
    //   .leftJoinAndSelect('article.tags', 't')
    //   .getMany();

    // console.log(articles);
    // console.log(articles.map((item) => item.tags));

    // 2.修改
    // const article = await AppDataSource.manager.findOne(Article, {
    //   where: {
    //     id: 2,
    //   },
    //   relations: {
    //     tags: true,
    //   },
    // });

    // article.title = '修改后的标题2';

    // article.tags = article.tags.filter((item) => item.name.includes('程序员'));

    // await AppDataSource.manager.save(Article, article);
    // console.log(article);

    // 删除
    // await AppDataSource.manager.delete(Article, 1);
    // await AppDataSource.manager.delete(Tag, 1);

    const tags = await AppDataSource.manager.find(Tag, {
      relations: {
        articles: true,
      },
    });
    console.log(tags);
  })
  .catch((error) => console.log(error));
