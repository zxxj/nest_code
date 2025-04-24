import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { EntityManager } from 'typeorm';
import { Article } from './entities/article.entity';
export declare class ArticleService {
    entityManager: EntityManager;
    initData(): Promise<void>;
    create(createArticleDto: CreateArticleDto): string;
    findAll(): Promise<Article[]>;
    findOne(id: number): string;
    update(id: number, updateArticleDto: UpdateArticleDto): string;
    remove(id: number): string;
}
