import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestOneModule } from './test-one/test-one.module';
import { TestTwoModule } from './test-two/test-two.module';

@Module({
  imports: [
    // 模块使用Dynamic Module形式后,import就需要改写为以下形式,通过register方法传入参数,返回值就是模块定义
    TestOneModule.register({
      username: 'xinxin',
      age: 18,
    }),
    TestTwoModule.register({
      name: 'test2name',
      age: 22,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
