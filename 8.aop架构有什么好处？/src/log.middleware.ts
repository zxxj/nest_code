import { Injectable, NestMiddleware } from '@nestjs/common';

// 路由中间件
@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('before2:', req.url);
    next();

    console.log('after2:');
  }
}
