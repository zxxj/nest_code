import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(
    session({
      secret: 'xin', // 指定加密的密钥
      resave: false, // 为true是每次访问都会更新session,不管有没有修改session的内容,而false是只有session内容变了才会去更新session
      saveUninitialized: false, // 设置为true是不管是否设置session,都会初始化一个空的session对象.比如你没有登录的时候,也会初始化一个,session对象,这个设置为false就好
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
