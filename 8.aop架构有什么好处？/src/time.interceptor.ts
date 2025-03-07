import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, tap } from 'rxjs';

// interceptor拦截器,可以在Controller之前或之后加入一些逻辑.

// interceptor要实现NestInterceptor接口,实现intercept方法,调用next.handle()就会调用目标Controller,可以在之前和之后加入一些处理逻辑
// Controller之前或之后的处理逻辑可能是异步的,Nest里通过rxjs来组织他们,所以可以使用rxjs的各种operator.
@Injectable()
export class TimeInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const startTime = Date.now();

    return next.handle().pipe(
      tap(() => {
        console.log('time:', Date.now() - startTime);
      }),
    );
  }
}
