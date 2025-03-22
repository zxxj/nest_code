import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DbService } from 'src/db/db.service';
import { Book } from './entities/boot.entity';
export declare class BookService {
    private readonly dbService;
    constructor(dbService: DbService);
    list(): Promise<Book[]>;
    findById(id: number): Promise<Book | undefined>;
    create(createBookDto: CreateBookDto): Promise<Book>;
    update(updateBookDto: UpdateBookDto): Promise<Book>;
    delete(id: number): Promise<void>;
}
