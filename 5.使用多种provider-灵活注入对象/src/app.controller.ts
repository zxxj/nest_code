import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  // 1. 构造器方式注入: 构造器里声明了对AppService的依赖,就会自动注入
  // constructor(private readonly appService: AppService) {}

  // 2. 属性方式注入: 通过@Inject指定注入provider的token即可
  // @Inject(AppService)
  // private readonly appService: AppService;

  // 3. 如果provider的token是字符串的话,注入的时候就需要用@Inject手动指定要注入对象的token了
  // constructor(@Inject('app_service') private readonly appService: AppService) {}

  // 无论是用class或是字符串来作为provider的token,都可以正确的被注入到目标对象, 只是相比之下用class可以省去@Inject,比较简便

  // 4. 注入指定的值
  constructor(
    @Inject('app_service')
    private readonly appService: AppService,

    // 使用useValue声明一个值
    @Inject('person')
    private readonly personService: { username: string; age: number },

    // useFactory的值可能是动态产生的
    @Inject('person2')
    private readonly person2Service: { height: number; age: number },

    // useFactory使用参数方式注入其他的provide
    @Inject('useFactoryTestToken')
    private readonly useFactoryTestTokenService: {
      username: string;
      age: number;
      getHelloFn: Function;
    },

    // 6. useFactory支持异步,nest会等拿到异步方法的结果之后再进行注入
    @Inject('useFactoryAsync')
    private readonly useFactoryAsync: { asyncName: string; asyncAge: string },
  ) {}

  @Get()
  getHello(): string {
    console.log(this.personService);
    console.log(this.person2Service);
    console.log(this.useFactoryTestTokenService);
    console.log(this.useFactoryAsync);
    return this.appService.getHello();
  }
}
