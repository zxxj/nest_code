import { UserService } from './user.service';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { Response } from 'express';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    private jwtService;
    login(user: LoginDto, res: Response): Promise<"登录成功" | "登录失败">;
    register(user: RegisterDto): Promise<"注册成功" | "注册失败">;
    testAuth(): string;
}
