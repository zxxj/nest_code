"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const article_entity_1 = require("./article/entities/article.entity");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)({ path: 'src/.env' });
console.log(process.env);
exports.default = new typeorm_1.DataSource({
    type: 'mysql',
    host: `${process.env.mysql_server_host}`,
    port: +`${process.env.mysql_server_port}`,
    username: `${process.env.mysql_server_username}`,
    password: `${process.env.mysql_server_password}`,
    database: `${process.env.mysql_server_database}`,
    synchronize: false,
    logging: true,
    entities: [article_entity_1.Article],
    poolSize: 10,
    migrations: ['src/migrations/**.ts'],
    connectorPackage: 'mysql2',
    extra: {
        authPlugin: 'sha256_password',
    },
});
//# sourceMappingURL=data-source.js.map