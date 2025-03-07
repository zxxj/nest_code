import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NextFunction, Request, Response } from 'express';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 通过app.use模拟express全局中间件
  app.use(function (req: Request, res: Response, next: NextFunction) {
    console.log('before:', req.url);
    next();
    console.log('after:');
  });

  // 通过app.useGlobalGuards开启全局路由守卫
  app.useGlobalGuards(new LoginGuard());

  // 通过useGlobalInterceptors开启对全部Controller中的handler生效
  // app.useGlobalInterceptors(new TimeInterceptor());

  // 通过app.useGlobalPipes全局级启用Pipe,对所有Controller中的handler生效
  app.useGlobalPipes(new ValidatePipe());

  // 通过app.useGlobalFilters全局级启用Exception,对所有Controller中的handler生效
  app.useGlobalFilters(new TestFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
