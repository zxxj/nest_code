import {
  CallHandler,
  ExecutionContext,
  Inject,
  Injectable,
  NestInterceptor,
  SetMetadata,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements NestInterceptor {
  @Inject(Reflector)
  private readonly reflector: Reflector;

  // 通过ExecutionContext取到目标handler,然后注入reflector,通过reflector.get取出handler上的metadata

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    console.log(
      'test interceptor 取出handler中的metadata:',
      this.reflector.get('roles', context.getHandler()),
    );

    console.log(
      'test interceptor 取出class中的metadata:',
      this.reflector.get('roles', context.getClass()),
    );
    return next.handle();
  }
}
