import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { Person } from "./entity/Person"

export const AppDataSource = new DataSource({
    type: "mysql", // 数据库类型
    host: "localhost", // 主机号
    port: 3306, // 端口号
    username: "root", // 数据库用户名
    password: "123456", // 数据库密码
    database: "practice", // 指定要操作的数据库
    synchronize: true, // 为true表示同步建表,当database里没有和entity对应的表的时候,会自动生成建表sql语句并执行,当然如果有对应的表就不会创建了
    logging: true, // 打印生成的sql语句
    entities: [User, Person], // 指定有哪些和数据库的表对应的entity
    // entities: ['./**/entity/*.ts'] // 除了class,还可以通过这种方式指定
    migrations: [], // 修改表结构之类的sql
    subscribers: [], // entity生命周期的订阅者,比如insert/update/romove前后可以加入一些逻辑
    poolSize: 10, // 指定数据库连接池中连接的最大数量
    connectorPackage: 'mysql2', // 指用什么驱动包

    // extra: 额外发送给驱动包的一些选项
    extra: { 
        authPlugin: 'sha256_password'
    }
})
