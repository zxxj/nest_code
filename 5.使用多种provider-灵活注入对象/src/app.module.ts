import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],

  // provider的简写形式
  // providers: [AppService], 默认的token就是class本身,这样不用使用 @Inject 来指定注入的 token

  // provider的完整写法
  providers: [
    {
      // 1. 通过provide指定token,通过useClass指定对象的类, nest会自动对它做实例化后用来注入
      provide: AppService,
      useClass: AppService,
    },
    {
      // 2. token也可以是字符串
      provide: 'app_service',
      // 可以使用useExisting来指定别名
      // useExisting: 'test_service',
      useClass: AppService,
    },
    {
      // 3. 除了指定class外还可以直接指定一个值,让IOC容器来注入, 使用provide指定 token,使用useValue指定值
      provide: 'person',
      useValue: {
        username: 'xinxin',
        age: 18,
      },
    },
    {
      // 4. provide的值可能是动态产生的,nest同样支持,可以使用useFactory实现
      provide: 'person2',
      useFactory() {
        return {
          height: 1.88,
          weight: 60.3,
        };
      },
    },
    {
      // 5. useFactory 支持通过参数注入别的 provider
      provide: 'useFactoryTestToken',
      useFactory(
        person: { username: string; age: number },
        appService: AppService,
      ) {
        return {
          username: person.username,
          age: person.age,
          getHelloFn: appService.getHello,
        };
      },
      // 通过inject声明了两个token,一个是字符串的person一个是class token的AppService
      inject: ['person', AppService],
    },
    {
      // 6. useFactory支持异步,nest会等拿到异步方法的结果之后再进行注入
      provide: 'useFactoryAsync',
      async useFactory() {
        await new Promise((resolve) => {
          setTimeout(resolve, 3000);
        });

        return {
          asyncName: 'aaa',
          asyncAge: 'bbb',
        };
      },
    },
  ],
})
export class AppModule {}
