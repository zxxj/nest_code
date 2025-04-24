"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTagColumn1745507170589 = void 0;
class AddTagColumn1745507170589 {
    name = 'AddTagColumn1745507170589';
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`article\` ADD \`tags\` varchar(30) NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE \`article\` DROP COLUMN \`tags\``);
    }
}
exports.AddTagColumn1745507170589 = AddTagColumn1745507170589;
//# sourceMappingURL=1745507170589-add-tag-column.js.map