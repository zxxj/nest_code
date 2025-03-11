import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestMiddleware } from './test.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(TestMiddleware).forRoutes('*'); // 中间件应用到所有路由

    consumer
      .apply(TestMiddleware)
      .forRoutes({ path: 'test1', method: RequestMethod.GET }); // 修改后的写法

    consumer
      .apply(TestMiddleware)
      .forRoutes({ path: 'print1', method: RequestMethod.GET });
  }
}
