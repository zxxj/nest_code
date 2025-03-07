import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);

  // 触发销毁逻辑,但不会真正的退出进程
  setTimeout(() => {
    app.close();
  }, 3000);
}
bootstrap();
