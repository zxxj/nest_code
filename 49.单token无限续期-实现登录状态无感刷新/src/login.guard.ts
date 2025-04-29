import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class LoginGuard implements CanActivate {
  @Inject(JwtService)
  private jwtService: JwtService;

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const response: Response = context.switchToHttp().getResponse();

    const authorization = request.headers.authorization;

    if (!authorization) {
      throw new UnauthorizedException('用户未登录');
    }

    try {
      const token = authorization.split(' ')[1];
      const data = this.jwtService.verify(token);

      // 访问接口后返回新的token,这样每次返回新的token,即可实现token永不过期
      const newJwt = this.jwtService.sign(
        {
          user: data.username,
        },
        {
          secret: 'xin',
          expiresIn: '7d',
        },
      );

      response.setHeader('token', newJwt);

      return true;
    } catch (error) {
      throw new UnauthorizedException('token已失效,请重新登陆');
    }
  }
}
