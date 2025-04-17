import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "practice",
    synchronize: true,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password' // 验证的插件，sha256_password，这个是切换密码的加密方式的 新版本 mysql 改成这种密码加密方式了。
    }
})
