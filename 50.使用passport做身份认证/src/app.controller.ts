import { Controller, Get, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtService } from '@nestjs/jwt';

// 扩展下 express 的 request.user 的类型
interface JwtUserData {
  userId: number;
  username: string;
}

declare module 'express' {
  interface Request {
    user: JwtUserData;
  }
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Post('login')
  @UseGuards(AuthGuard('local'))
  async login(@Req() req: Request) {
    console.log(req.user);

    const token = this.jwtService.sign(
      {
        userId: req.user.userId,
        username: req.user.username,
      },
      {
        expiresIn: '0.5h',
      },
    );
    return {
      token,
    };
  }

  // 需要登录认证的接口
  @Get('list')
  @UseGuards(AuthGuard('jwt'))
  list(@Req() req: Request) {
    console.log(req.user);
    return 'list';
  }
}
