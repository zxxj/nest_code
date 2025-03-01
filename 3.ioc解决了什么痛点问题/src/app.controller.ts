import { Controller, Get, Inject } from '@nestjs/common';
import { AppService } from './app.service';

// @Controller(): 代表这个class也可以注入, nest也会把它放到IOC容器里
@Controller()
export class AppController {
  // constructor(private readonly appService: AppService) {}

  // 通过属性的方式声明依赖
  @Inject(AppService)
  private appService: AppService;

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
