import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test1')
  test1() {
    return 'test1';
  }

  @Get('test2')
  test2() {
    return 'test2';
  }

  @Get('print1')
  print1() {
    return 'print1';
  }

  @Get('print2')
  print2() {
    return 'print2';
  }
}
