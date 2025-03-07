import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';

// Guard路由守卫, 可以用于在调用某个Controller之前进行权限判断,返回true或false来决定是否放行.

// Guard要实现CanActivate接口,实现canActivate方法,可以从context中拿到请求的信息,然后做一些权限验证操作,最终返回true或false来决定是否放行.
@Injectable()
export class LoginGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // console.log('context:', context);
    console.log('Login check');
    return true;
  }
}
