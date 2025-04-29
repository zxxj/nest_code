import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Inject,
  Get,
} from '@nestjs/common';
import { UserService } from './user.service';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    if (loginUser.username !== 'xin' || loginUser.password !== '123456') {
      throw new BadRequestException('用户名或密码错误');
    }

    const jwt = this.jwtService.sign(
      {
        user: loginUser.username,
      },
      {
        secret: 'xin',
        expiresIn: '7d',
      },
    );

    return jwt;
  }
}
