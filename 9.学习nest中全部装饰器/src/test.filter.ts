import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class TestFilter<T> implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    console.log(exception);
    const response: Response = host.switchToHttp().getResponse();
    response.status(exception.getStatus()).json({
      message: `xin:${exception.message}`,
    });
  }
}
