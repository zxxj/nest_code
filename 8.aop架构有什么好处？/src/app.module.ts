import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LogMiddleware } from './log.middleware';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

// 在Module中实现NestModule,绑定路由中间件
export class AppModule implements NestModule {
  // configure中可以规定LogMiddleware在访问那些路由才会生效
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogMiddleware).forRoutes('test1');
  }
}
