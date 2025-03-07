// 自定义参数装饰器
import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { Request } from 'express';

export const MyParam = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    // 参数装饰器的返回值就是参数的值
    return 'ccc';
  },
);

export const MyHaders = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    console.log(request.headers);
    return key ? request.headers[key.toLocaleLowerCase()] : request.headers;
  },
);

export const MyQuery = createParamDecorator(
  (key: string, ctx: ExecutionContext) => {
    const request: Request = ctx.switchToHttp().getRequest();
    console.log(request);
    return request.query[key];
  },
);
