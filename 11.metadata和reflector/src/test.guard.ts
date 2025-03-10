import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';

@Injectable()
export class TestGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    // 通过ExecutionContext取到目标handler,然后注入reflector,通过reflector.get取出handler上的metadata

    console.log(
      'test guard 取出handler中的metadata:',
      this.reflector.get('roles', context.getHandler()),
    );

    console.log(
      'test guard 取出class中的metadata:',
      this.reflector.get('roles', context.getClass()),
    );

    console.log(
      'test guard this.reflector取出metadata的方式 getAll会取出所有的metadata:',
      this.reflector.getAll('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );

    console.log(
      'test guard this.reflector取出metadata的方式 getAllAndMerge会取出所有的metadata然后合并为一个数组:',
      this.reflector.getAllAndMerge('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );

    console.log(
      'test guard this.reflector取出metadata的方式 getAllAndOverride会返回第一个非空的metadata:',
      this.reflector.getAllAndOverride('roles', [
        context.getHandler(),
        context.getClass(),
      ]),
    );
    return true;
  }
}
