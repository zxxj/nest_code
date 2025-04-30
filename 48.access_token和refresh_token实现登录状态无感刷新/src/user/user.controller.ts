import {
  Controller,
  Post,
  Body,
  Inject,
  Get,
  Query,
  UnauthorizedException,
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
    const foundUser = await this.userService.login(loginUser);
    console.log(foundUser);

    const access_token = this.jwtService.sign(
      {
        user: {
          username: foundUser.username,
          id: foundUser.id,
        },
      },
      {
        expiresIn: '30m',
      },
    );

    const refresh_token = this.jwtService.sign(
      {
        user: {
          username: foundUser.username,
          id: foundUser.id,
        },
      },
      {
        expiresIn: '7d',
      },
    );

    return {
      access_token,
      refresh_token,
    };
  }

  @Get('refresh')
  async refresh(@Query('refresh_token') refreshToken: string) {
    try {
      // 1.首先需要验证传递过来的refreshToken是否在有效期内(设置的是7天)
      const data = this.jwtService.verify(refreshToken);
      console.log('data', data);

      // 3.在有效期内,拿到userId,去数据库拿到用户信息
      const user = await this.userService.findUserById(data.userId);
      console.log(user);

      // 4.生成新的jwt并返回
      const access_token = this.jwtService.sign({
        user: {
          username: user?.username,
          id: user?.id,
        },
      });

      const refresh_token = this.jwtService.sign({
        user: {
          username: user?.username,
          id: user?.id,
        },
      });

      return {
        access_token,
        refresh_token,
      };
    } catch (error) {
      // 2.如果refreshToken已经超过了有效期,则抛出异常
      throw new UnauthorizedException('token已失效,请重新登录');
    }
  }
}
