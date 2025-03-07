import { Injectable } from '@nestjs/common';
import { TestGlobalModuleDecoratorService } from './test-global-module-decorator/test-global-module-decorator.service';

// 通过@Injectable声明此类为provider
@Injectable()
export class AppService {
  constructor(
    private readonly TestGlobalModuleDecorator: TestGlobalModuleDecoratorService,
  ) {}
  getHello(): string {
    console.log(this.TestGlobalModuleDecorator);
    return 'Hello World!';
  }
}
