"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const article_entity_1 = require("./entities/article.entity");
let ArticleService = class ArticleService {
    entityManager;
    async initData() {
        const a1 = new article_entity_1.Article();
        a1.title = '夏日经济“热力”十足 “点燃”文旅消费新活力';
        a1.content =
            '人民网北京6月17日电 （高清扬）高考结束、暑期将至，各地文旅市场持续火热，暑期出游迎来热潮。热气腾腾的“夏日经济”成为消费活力升级的缩影，展示出我国文旅产业的持续发展势头。';
        const a2 = new article_entity_1.Article();
        a2.title = '科学把握全面深化改革的方法要求';
        a2.content =
            '科学的方法是做好一切工作的重要保证。全面深化改革是一场复杂而深刻的社会变革，必须运用科学方法才能取得成功。';
        await this.entityManager.save(article_entity_1.Article, a1);
        await this.entityManager.save(article_entity_1.Article, a2);
    }
    create(createArticleDto) {
        return 'This action adds a new article';
    }
    async findAll() {
        return await this.entityManager.find(article_entity_1.Article);
    }
    findOne(id) {
        return `This action returns a #${id} article`;
    }
    update(id, updateArticleDto) {
        return `This action updates a #${id} article`;
    }
    remove(id) {
        return `This action removes a #${id} article`;
    }
};
exports.ArticleService = ArticleService;
__decorate([
    (0, typeorm_1.InjectEntityManager)(),
    __metadata("design:type", typeorm_2.EntityManager)
], ArticleService.prototype, "entityManager", void 0);
exports.ArticleService = ArticleService = __decorate([
    (0, common_1.Injectable)()
], ArticleService);
//# sourceMappingURL=article.service.js.map