import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CustomDecorator } from './customDecorator/custom-decorator.decorator';
import { TestGuard } from './test.guard';
import { MergeDecorator } from './customDecorator/merge-decorator';
import { MyHaders, MyQuery } from './customDecorator/custom-param-decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @CustomDecorator('admin')
  @UseGuards(TestGuard)
  getHello(): string {
    return this.appService.getHello();
  }

  // 使用合并后的装饰器,等同于以上三个
  @MergeDecorator('merge', 'admin')
  testMergeDecrator() {
    return 'test-merge-decorator';
  }

  // 使用自定义参数装饰器
  @Get('test')
  testCustomParamDecorator(
    @Query('username') username,
    @MyQuery('age', new ParseIntPipe()) age,
    @MyHaders('Accept') headers,
  ) {
    console.log(age);
    console.log(username);
    console.log(headers);
    return headers;
  }
}
