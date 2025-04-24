import { ArticleService } from './article.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
export declare class ArticleController {
    private readonly articleService;
    constructor(articleService: ArticleService);
    initData(): Promise<void>;
    create(createArticleDto: CreateArticleDto): string;
    findAll(): Promise<import("./entities/article.entity").Article[]>;
    findOne(id: string): string;
    update(id: string, updateArticleDto: UpdateArticleDto): string;
    remove(id: string): string;
}
