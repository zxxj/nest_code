import { User } from './entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class UserService {
    private userRepository;
    private logger;
    register(user: RegisterDto): Promise<"注册成功" | "注册失败">;
    login(user: LoginDto): Promise<User>;
}
