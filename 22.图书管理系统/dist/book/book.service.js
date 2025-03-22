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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const db_service_1 = require("../db/db.service");
const boot_entity_1 = require("./entities/boot.entity");
const crypto_1 = require("crypto");
let BookService = class BookService {
    dbService;
    constructor(dbService) {
        this.dbService = dbService;
    }
    async list() {
        const books = await this.dbService.read();
        return books;
    }
    async findById(id) {
        const books = await this.dbService.read();
        return books.find((book) => book.id === id);
    }
    async create(createBookDto) {
        const books = await this.dbService.read();
        const book = new boot_entity_1.Book();
        book.id = (0, crypto_1.randomInt)(99);
        book.name = createBookDto.name;
        book.author = createBookDto.author;
        book.description = createBookDto.description;
        book.cover = createBookDto.cover;
        books.push(book);
        await this.dbService.write(books);
        return book;
    }
    async update(updateBookDto) {
        const books = await this.dbService.read();
        const foundBook = books.find((book) => book.id === updateBookDto.id);
        if (!foundBook) {
            throw new common_1.BadRequestException(`该图书不存在 id:${updateBookDto.id}`);
        }
        foundBook.name = updateBookDto.name;
        foundBook.description = updateBookDto.description;
        foundBook.author = updateBookDto.author;
        foundBook.cover = updateBookDto.cover;
        await this.dbService.write(books);
        return foundBook;
    }
    async delete(id) {
        const books = await this.dbService.read();
        const index = books.findIndex((book) => book.id === id);
        if (index !== -1) {
            books.splice(index, 1);
            await this.dbService.write(books);
        }
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(db_service_1.DbService)),
    __metadata("design:paramtypes", [db_service_1.DbService])
], BookService);
//# sourceMappingURL=book.service.js.map