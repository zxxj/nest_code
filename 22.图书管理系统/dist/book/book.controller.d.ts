import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    list(): Promise<import("./entities/boot.entity").Book[]>;
    findById(id: string): Promise<import("./entities/boot.entity").Book | undefined>;
    create(createBookDto: CreateBookDto): Promise<import("./entities/boot.entity").Book>;
    update(updateBookDto: UpdateBookDto): Promise<import("./entities/boot.entity").Book>;
    delete(id: string): Promise<void>;
    uploadFile(file: Express.Multer.File): string;
}
