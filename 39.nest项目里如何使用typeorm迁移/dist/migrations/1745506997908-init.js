"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Init1745506997908 = void 0;
class Init1745506997908 {
    name = 'Init1745506997908';
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE \`article\` (\`id\` int NOT NULL AUTO_INCREMENT, \`title\` varchar(30) NOT NULL, \`content\` text NOT NULL, \`createTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateTime\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE \`article\``);
    }
}
exports.Init1745506997908 = Init1745506997908;
//# sourceMappingURL=1745506997908-init.js.map