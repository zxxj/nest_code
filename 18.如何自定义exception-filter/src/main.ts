import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomFilterFilter } from './custom-filter.filter';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 全局filter
  // app.useGlobalFilters(new CustomFilterFilter());

  //  全局pipe
  app.useGlobalPipes(new ValidationPipe());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
