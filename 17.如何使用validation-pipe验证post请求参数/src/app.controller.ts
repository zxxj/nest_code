import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { TestDto } from './dto/test.dto';
import { ValidwayDto } from './dto/validway.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('testDto')
  testDto(@Body() obj: TestDto) {
    console.log(obj);
  }

  @Post('testValidway')
  testValidway(@Body() obj: ValidwayDto) {
    console.log(obj);
  }
}
