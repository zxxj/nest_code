import { DbService } from 'src/db/db.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import { LoginUserDto } from './dto/login-user.dto';
export declare class UserService {
    private readonly dbService;
    constructor(dbService: DbService);
    register(registerUserDto: RegisterUserDto): Promise<User>;
    login(loginUserDto: LoginUserDto): Promise<User>;
}
