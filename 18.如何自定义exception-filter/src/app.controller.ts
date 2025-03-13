import {
  BadGatewayException,
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './dto/test.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // throw new HttpException('xxx', HttpStatus.BAD_REQUEST);
    // throw new BadRequestException('xxx'); // 也可以直接抛出具体的异常

    throw new BadGatewayException('aaa');
    return this.appService.getHello();
  }

  // filter中@Catch了HttpException后,ValidtionPipe会出现的问题
  @Post('test')
  test(@Body() obj: TestDto) {
    console.log(obj);
  }
}
