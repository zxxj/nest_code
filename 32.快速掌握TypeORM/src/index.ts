import { In, QueryBuilder } from "typeorm"
import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log("Inserting a new user into the database...")
    
    // 1.新增单条
    // const user = new User()
    // user.firstName = "xinxin"
    // user.lastName = "zhang"
    // user.age = 25
    // await AppDataSource.manager.save(user)

    // 2.修改单条 + id
    // const user = new User()
    // user.id = 1
    // user.firstName = "xinxin"
    // user.lastName = "zhang"
    // user.age = 25
    // await AppDataSource.manager.save(user)

    // 3.删除单条
    // const user = new User()
    // await AppDataSource.manager.delete(User, 1)

    // 4.批量添加
    // const user = new User()
    // await AppDataSource.manager.save(User, [
    //     { firstName: "xx", lastName: 'x', age: 18 },
    //     { firstName: "yy", lastName: 'y', age: 23 },
    //     { firstName: "zz", lastName: 'z', age: 36 },
    //     { firstName: "jj", lastName: 'j', age: 48 },
    //     { firstName: "kk", lastName: 'k', age: 23 },
    // ])

    // 5.批量修改
    // const user = new User()
    //     await AppDataSource.manager.save(User, [
    //     { id: 3,firstName: "xx", lastName: 'x', age: 31 },
    //     { id: 4, firstName: "yy", lastName: 'y', age: 32 },
    //     { id: 5, firstName: "zz", lastName: 'z', age: 33 },
    // ])

    // 6.批量删除
    // const user = new User()
    // await AppDataSource.manager.delete(User, [3,5])

    // reomove方式删除: delete和remove的区别是delete直接传入id,remove需要传入entity对象
    // const user = new User()
    // user.id = 4
    // await AppDataSource.manager.remove(User, user)

    
    // console.log("Saved a new user with id: " + user.id)
    
    // console.log("Loading users from the database...")
    
    // 7.find: 查询, 查询所有用户列表
    // const user = new User()
    // const users = await AppDataSource.manager.find(User)

    // 8.findBy: 根据条件查询,例如只查询年龄为23岁的用户
    // const user = new User()
    // const users = await AppDataSource.manager.findBy(User, {
    //     age: 23
    // })

    // 9.findAndCount: 可以拿到有多少条记录
    // const user = new User()
    // const [users, count] = await AppDataSource.manager.findAndCount(User) 
    // console.log("count:",count)

    // 10.findAndCountBy: 可以指定条件
    // const user = new User()
    // const [users, count] = await AppDataSource.manager.findAndCountBy(User, {
    //     age: 23
    // })
    // console.log("count:", count)

    // 11.findOne: 查询一条
    // const user = new User()
    // const user = await AppDataSource.manager.findOne(User, {
    //     // 指定select的列为firstName和age
    //     select: {
    //         firstName: true,
    //         age: true
    //     },
    //     where: {
    //         id: 7 // 指定查询的where条件为id为7
    //     },

    //     // 根据order指定的age升序排列
    //     order: {
    //         age: 'ASC'
    //     }
    // })
    // console.log(user)

    // 12.find: 查询指定的数据
    // const user = new User()
    // const users = await AppDataSource.manager.find(User, {
    //     select: {
    //         lastName: true,
    //         age: true
    //     },
    //     where: {
    //         id: In([6, 8])
    //     },
    //     order: {
    //         age: 'ASC'
    //     }
    // })

    // 13.findOneBy: 也可以这样写
    // const user = new User()
    // const user = await AppDataSource.manager.findOneBy(User, {
    //     age: 23
    // })
    // console.log(user)

    // 14.findOneOrFail或者findOneByOrFail: 如果没找到,会抛一个EntityNotFoundError的异常
    // const user = new User()
    // const user = await AppDataSource.manager.findOneByOrFail(User, {
    //     age: 99
    // })
    // console.log(user)

    // console.log("Loaded users: ", users)

    // 15.query: 可以使用query直接执行sql语句进行查询
    // const user = new User()
    // const users = await AppDataSource.manager.query('select * from user where id in(?, ?)', [6, 8])
    // console.log(users)

    // 16.但是复杂的sql语句不会直接写,而是会使用queryBuilder
    const queryBuilder = await AppDataSource.manager.createQueryBuilder()
    const users2 = await queryBuilder.select('user')
        .from(User, 'user')
        .where('user.id = :id', { id: 6 })
        .getOne()
    console.log(users2)

    console.log("Here you can setup and run express / fastify / any other framework.")

}).catch(error => console.log(error))
