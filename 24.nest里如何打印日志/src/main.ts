import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLogger } from './MyLogger';
import { MyLogger2 } from './MyLogger2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // 关闭日志
    // logger: false,

    // 手动指定打印那些日志类型
    // logger: ['warn', 'error', 'log'],

    // 自定义日志的打印方式,在构建应用时指定自定义的Logger
    // logger: new MyLogger(),

    // 日志实现注入依赖
    bufferLogs: true, // 先不打印日志,把它放到buffer缓冲区,直到useLogger指定了Logger并且初始化应用完毕
  });

  app.useLogger(app.get(MyLogger2)); // app.get就是从容器中取到这个类的实例的

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
