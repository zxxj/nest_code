import {
  Controller,
  Get,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { AppService } from './app.service';
import { LoginGuard } from './login.guard';
import { TimeInterceptor } from './time.interceptor';
import { ValidatePipe } from './validate.pipe';
import { TestFilter } from './test.filter';

@Controller()
// interceptors支持Controller级,作用于下面全部handler生效
@UseInterceptors(TimeInterceptor)
// pipe支持Controller级,作用于下面全部handler生效
// @UsePipes(ValidatePipe)

// Exception支持Controller级,作用于下面全部handler生效
// @UseFilters(TestFilter)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('handler...');
    return this.appService.getHello();
  }

  @Get('test1')
  test1(): string {
    console.log('test1');
    return 'test1';
  }

  @Get('test2')
  // 单独启用guard,只对这个路由生效
  // @UseGuards(LoginGuard)

  // 单独启用interceptors,只对这个handler生效
  // @UseInterceptors(TimeInterceptor)
  test2(): string {
    console.log('test2');
    return 'test2';
  }

  // 单独启用pipe,只对这个handler生效
  // @Get('testPipe')
  // testPipe(@Query('num', ValidatePipe) num: number) {
  //   return num;
  // }

  // Controller级启用pipe,对这个Controller中所有的handler生效
  @Get('testPipe')
  testPipe(@Query('num') num: number) {
    return num;
  }

  // 全局级启用Pipe,对所有Controller中的handler生效
  @Get('testPipeControllerLevel')
  testPipeControllerLevel(@Query('num') num: number) {
    return num;
  }

  @Get('testPipeGlobalLevel')
  testPipeGlobalLevel(@Query('num') num: number) {
    return num;
  }

  // 测试ExceptionFilter

  // ExceptionFiter只对当前handler生效
  @Get('testExceptionFilterHandleLevel')
  // @UseFilters(TestFilter)
  testExceptionFilterHandleLevel(@Query('num') num: number) {
    return num;
  }

  // Exception支持Controller级,作用于下面全部handler生效
  @Get('testExceptionFilterControllerLevel')
  testExceptionFilterControllerLevel(@Query('num') num: number) {
    return num;
  }

  @Get('testExceptionFilterGlobalLevel')
  testExceptionFilterGlobalLevel(@Query('num') num: number) {
    return num;
  }
}
