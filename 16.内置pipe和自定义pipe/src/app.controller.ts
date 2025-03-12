import {
  Controller,
  DefaultValuePipe,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseArrayPipe,
  ParseBoolPipe,
  ParseEnumPipe,
  ParseFloatPipe,
  ParseIntPipe,
  ParseUUIDPipe,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestPipe } from './test.pipe';

enum TestEnum {
  AAA = '1',
  BBB = '2',
  CCC = '3',
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // ParseIntPipe: 将参数的数据类型转为整数
  @Get()
  getHello(
    @Query(
      'x',
      new ParseIntPipe({
        errorHttpStatusCode: HttpStatus.NOT_FOUND,
        exceptionFactory: (msg) => {
          console.log(msg);
          throw new HttpException(
            '参数错误时可以使用exceptionFactory抛出自定义异常',
            HttpStatus.NOT_IMPLEMENTED,
            {
              cause: new Error('aaa'),
            },
          );
        },
      }),
    )
    x: string,
  ): string {
    // ParseIntPipe: 将参数数据类型转为number
    console.log(typeof x);
    return this.appService.getHello();
  }

  // ParseFloatPipe: 将参数的数据类型转为浮点数
  @Get('testParseFloatPipe')
  testParseFloatPipe(
    @Query(
      'x',
      new ParseFloatPipe({
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        exceptionFactory: (msg) => {
          throw new HttpException(
            '参数错误时可以使用exceptionFactory抛出自定义异常',
            HttpStatus.CREATED,
            {
              cause: new Error('cause error'),
            },
          );
        },
      }),
    )
    x: number,
  ) {
    console.log(typeof x);
    return x;
  }

  // ParseBoolPipe: true/false以外的值都会抛出异常
  @Get('testParseBoolPipe')
  testParseBoolPipe(
    @Query(
      'x',
      new ParseBoolPipe({
        errorHttpStatusCode: HttpStatus.BAD_REQUEST,
        exceptionFactory: (msg) => {
          throw new HttpException(
            '参数错误时可以使用exceptionFactory抛出自定义异常',
            HttpStatus.CREATED,
            {
              cause: new Error('cause error'),
            },
          );
        },
      }),
    )
    x: boolean,
  ) {
    console.log(typeof x);
    return x;
  }

  // ParseArrayPipe
  // 需要依赖这两个包: class-validator class-transformer
  @Get('testParseArrayPipe')
  testParseArrayPipe(
    @Query(
      'x',
      new ParseArrayPipe({
        items: Number, // 将数组每一项的数据类型转为number
        separator: '..', // 指定分隔符,传入参数时需要这样传 x=1..2..3
        optional: true, // true没有传参数时也不会抛出异常,false没穿参数时会抛出异常
      }),
    )
    x: Array<number>,
  ) {
    return x.reduce((total, item) => total + item, 0);
  }

  // ParseEnumPipe: 根据参数取当前枚举数据中存在的值, 传入的参数如果枚举数据中不存在则报错
  @Get('testParseEnumPipe/:enum')
  testParseEnumPipe(@Param('enum', new ParseEnumPipe(TestEnum)) x: TestEnum) {
    return x;
  }

  // ParseUUIDPipe: 检测是否是UUID, 如果参数不是uuid则抛出异常
  @Get('testParseUUIDPipe/:uuid')
  testParseUUIDPipe(@Param('uuid', ParseUUIDPipe) uuid: string) {
    return uuid;
  }

  // DefaultValuePipe: 设置参数默认值
  @Get('testDefaultValuePipe')
  testDefaultValuePipe(@Query('x', new DefaultValuePipe('默认值')) x: string) {
    return x;
  }

  // 自定义Pipe
  @Get('customPipe')
  testCustomPipe(@Query('x', TestPipe) x: string) {
    return x;
  }
}
