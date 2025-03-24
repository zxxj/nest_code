import { ConsoleLogger, Inject, Injectable } from '@nestjs/common';
import { AppService } from './app.service';

@Injectable()
// 日志实现注入依赖
export class MyLogger2 extends ConsoleLogger {
  @Inject(AppService)
  private readonly appService: AppService;

  log(message: string, context: string) {
    console.log('--------------------');
    console.log(this.appService.getHello());
    console.log(`[${context}]`, message);
  }
}
