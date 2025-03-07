import { Controller, Get, Inject, Optional } from '@nestjs/common';
import { AppService } from './app.service';
import { ProviderPropertyInjectWayService } from './provider-property-inject-way/provider-property-inject-way.service';

// 通过@Controller装饰器声明此类为Controller
@Controller()
export class AppController {
  // 构造器方式注入provider
  // constructor(private readonly appService: AppService) {}

  // 属性方式注入provider, 属性方式注入要指定注入的token,可能是class也可能是string
  // class
  @Inject(AppService)
  private readonly appService: AppService;

  // string
  @Inject('providerPropertyInjectWay')
  private readonly providerPropertyInjectService: ProviderPropertyInjectWayService;

  // 注入useFactory方式声明的provider
  @Inject('providerUseFactoryInjectWay')
  private readonly providerUseFactoryInjectWay: Record<string, any>;

  // 测试Optional构造器
  // 这些注入的依赖如果没有的话,创建对象时会报错,但如果它是可选的,可以用Optional构造器声明一下,这样没有对应的provider也能正常创建这个对象.
  @Optional()
  @Inject('aaa')
  private readonly aaa: Record<string, any>;

  @Get()
  getHello(): string {
    console.log(this.providerPropertyInjectService);
    console.log(this.providerUseFactoryInjectWay);
    return this.appService.getHello();
  }
}
