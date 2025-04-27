import {
  Controller,
  Get,
  Inject,
  Res,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { AppService } from './app.service';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Inject(JwtService)
  private jwtService: JwtService;

  @Get('test')
  test(
    @Headers('authorization') authorizazion: string,
    @Res({ passthrough: true }) response: Response,
  ) {
    console.log(authorizazion);

    if (authorizazion) {
      try {
        const token = authorizazion.split(' ')[1];
        const data = this.jwtService.verify(token);
        const newToken = this.jwtService.sign({
          count: data.count + 1,
        });

        // 使用 jwtService.sign 来生成一个 jwt token，放到 response header 里
        // 因为注入 response 对象之后，默认不会把返回值作为 body 了，需要设置 passthrough 为 true 才可以
        response.setHeader('token', newToken);
        return data.count + 1;
      } catch (error) {
        console.log(error);
        throw new UnauthorizedException();
      }
    } else {
      const newToken = this.jwtService.sign({
        count: 1,
      });

      response.setHeader('token', newToken);
      return 1;
    }

    // console.log(newToken);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
