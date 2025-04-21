import { AppDataSource } from './data-source';
import { IdCard } from './entity/IdCard';
import { User } from './entity/User';

AppDataSource.initialize()
  .then(async () => {
    // 1.新增
    // const user = new User()
    // user.firstName = "zhang"
    // user.lastName = "xx"
    // user.age = 18

    // const idCard = new IdCard()
    // idCard.cardName = '160xxx',
    // idCard.user = user

    // // OneToOne中设置了cascade为true时,不必手动保存user
    // // await AppDataSource.manager.save(user)
    // await AppDataSource.manager.save(idCard)

    // 2.查询
    // find查询方式
    // const cards = await AppDataSource.manager.find(IdCard, {

    //     // 关联查询
    //     relations: {
    //         user: true
    //     }
    // })
    // console.log(cards)

    // queryBuilder查询方式
    // const cards2 = await AppDataSource.manager.getRepository(IdCard)
    //     .createQueryBuilder('ic')
    //     .leftJoinAndSelect('ic.user', 'u')
    //     .getMany();
    // console.log(cards2)

    // 也可以直接用EntityManager创建queryBuilder来连接查询
    // const cards3 = await AppDataSource.manager.createQueryBuilder(IdCard, 'ic')
    //     .leftJoinAndSelect('ic.user', 'u')
    //     .getMany()
    // console.log(cards3)

    // 3.修改
    // const user = new User()
    // user.id = 3
    // user.firstName = 'zhang'
    // user.lastName = 'mh'
    // user.age = 26

    // const idCard = new IdCard()
    // idCard.id = 2
    // idCard.cardName = '136xx'
    // idCard.user = user

    // await AppDataSource.manager.save(idCard)

    // 4.删除: 因为设置了外键的onDelete是cascade,所以只要删除了user,那么关联的IdCard就也会跟着被删除
    // await AppDataSource.manager.delete(User, 2)

    // 如果没有这种级联删除,就需要手动删除了
    // const currentIdCard = await AppDataSource.manager.findOne(IdCard, {
    //     where: {
    //         id: 2
    //     },
    //     relations: {
    //         user: true
    //     }
    // })

    // await AppDataSource.manager.delete(User, 3)
    // await AppDataSource.manager.delete(IdCard, 2)

    // 4.user中查询idCard信息
    /**
     * 不过现在我们只是在idCard里访问user,如果想在user里访问idCard同样需要加一个@OneToOne装饰器,不过需要有第二个参数
     * 因为如果是维持外键的那个表,也就是有@JoinColumn的那个Entity,它是可以根据外键关联查到另一方的.
     * 但是现在这个没有外键的表改怎么查到另一方呢?
     * 所以这里通过第二个参数告诉typeorm,外键是另一个Entity的哪个属性.
     *  */
    const user = await AppDataSource.manager.find(User, {
      relations: {
        idCard: true,
      },
    });

    console.log(user);
  })
  .catch((error) => console.log(error));
