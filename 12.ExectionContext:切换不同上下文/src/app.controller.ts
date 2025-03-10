import { Controller, Get, UseFilters, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TestFilter } from './test.filter';
import { TestException } from './testException';
import { TestGuard } from './test.guard';
import { Roles } from './roles.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseFilters(TestFilter)
  @UseGuards(TestGuard)
  @Roles('admin')
  getHello(): string {
    // throw new TestException('111', '222');
    return this.appService.getHello();
  }
}
