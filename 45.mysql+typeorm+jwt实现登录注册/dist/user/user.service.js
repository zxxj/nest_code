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
var UserService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const typeorm_1 = require("typeorm");
const crypto = require("crypto");
const typeorm_2 = require("@nestjs/typeorm");
const md5 = (str) => {
    const hash = crypto.createHash('md5');
    hash.update(str);
    return hash.digest('hex');
};
let UserService = UserService_1 = class UserService {
    userRepository;
    logger = new common_1.Logger();
    async register(user) {
        const foundUser = await this.userRepository.findOneBy({
            username: user.username,
        });
        if (foundUser)
            throw new common_1.HttpException('用户已存在', 200);
        const newUser = new user_entity_1.User();
        newUser.username = user.username;
        newUser.password = md5(user.password);
        try {
            await this.userRepository.save(newUser);
            return '注册成功';
        }
        catch (error) {
            this.logger.error(error, UserService_1);
            return '注册失败';
        }
    }
    async login(user) {
        const foundUser = await this.userRepository.findOneBy({
            username: user.username,
        });
        if (!foundUser)
            throw new common_1.HttpException('用户名不存在', 500);
        if (foundUser.password !== md5(user.password))
            throw new common_1.HttpException('密码错误', 500);
        return foundUser;
    }
};
exports.UserService = UserService;
__decorate([
    (0, typeorm_2.InjectRepository)(user_entity_1.User),
    __metadata("design:type", typeorm_1.Repository)
], UserService.prototype, "userRepository", void 0);
exports.UserService = UserService = UserService_1 = __decorate([
    (0, common_1.Injectable)()
], UserService);
//# sourceMappingURL=user.service.js.map