import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { Response } from 'express';

// 实现ExceptionFilter接口,实现catch方法,就可以拦截异常了.

// 拦截什么类型的异常需要在@Catch装饰器上声明,然后在catch方法返回对应的响应,给用户更友好的提示.
@Catch(BadRequestException)
export class TestFilter<T> implements ExceptionFilter {
  catch(exception: BadRequestException, host: ArgumentsHost) {
    const response: Response = host.switchToHttp().getResponse();

    response.status(400).json({
      statusCode: 400,
      message: `test` + exception.message,
    });
  }
}
