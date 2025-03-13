import {
  ArgumentsHost,
  BadRequestException,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

// @catch装饰器: 传入需要捕获的异常, 一般传入HttpException就行了,因为其他异常都是它的子类
@Catch(HttpException)
export class CustomFilterFilter<T> implements ExceptionFilter {
  constructor(private readonly appService: AppService) {}

  catch(exception: HttpException, host: ArgumentsHost) {
    // console.log(exception, 'exception end ---');
    // console.log(host, 'host end ---');

    const http = host.switchToHttp();

    const response = http.getResponse<Response>();

    const statusCode = exception.getStatus();

    // 支持ValidationPipe
    const res = exception.getResponse() as { message: string[] };
    response.status(statusCode).json({
      code: statusCode,
      message: res?.message?.join ? res?.message?.join(',') : exception.message,
      error: 'Bad Requset',
      xxx: '111',
      appHello: this.appService.getHello(),
    });
  }
}
