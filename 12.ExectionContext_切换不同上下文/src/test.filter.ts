import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { TestException } from './testException';
import { Request, Response } from 'express';

@Catch(TestException)
export class TestFilter implements ExceptionFilter {
  catch(exception: TestException, host: ArgumentsHost) {
    console.log('exception:', exception, 'host:', host);

    //rgumentHost 是用于切换 http、websocket、rpc 等上下文类型的，可以根据上下文类型取到对应的 argument，让 Exception Filter 等在不同的上下文中复用
    //调用 switchToHttp 切换到 http 上下文，然后再调用 getRequest、getResponse 方法。
    // 如果是 websocket、基于 tcp 的微服务等上下文，就分别调用 host.swtichToWs、host.switchToRpc 方法。
    if (host.getType() === 'http') {
      const ctx = host.switchToHttp();
      const request = ctx.getRequest<Request>();
      const response = ctx.getResponse<Response>();

      response.status(500).json({
        a: exception.a,
        b: exception.b,
      });
    } else if (host.getType() === 'ws') {
      const ctx = host.switchToWs();
      console.log(ctx);
    } else if (host.getType() === 'rpc') {
      const ctx = host.switchToRpc();
      console.log(ctx);
    }
  }
}
