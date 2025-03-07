import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { TestExceptionDecoratorService } from './test-exception-decorator.service';
import { CreateTestExceptionDecoratorDto } from './dto/create-test-exception-decorator.dto';
import { UpdateTestExceptionDecoratorDto } from './dto/update-test-exception-decorator.dto';
import { TestFilter } from 'src/test.filter';

@Controller('test-exception-decorator')
export class TestExceptionDecoratorController {
  constructor(
    private readonly testExceptionDecoratorService: TestExceptionDecoratorService,
  ) {}

  @Post()
  create(
    @Body() createTestExceptionDecoratorDto: CreateTestExceptionDecoratorDto,
  ) {
    return this.testExceptionDecoratorService.create(
      createTestExceptionDecoratorDto,
    );
  }

  @Get()
  findAll() {
    return this.testExceptionDecoratorService.findAll();
  }

  @Get(':id')
  @UseFilters(TestFilter)
  findOne(@Param('id') id: string) {
    throw new HttpException('测试异常处理', HttpStatus.BAD_REQUEST);
    return this.testExceptionDecoratorService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTestExceptionDecoratorDto: UpdateTestExceptionDecoratorDto,
  ) {
    return this.testExceptionDecoratorService.update(
      +id,
      updateTestExceptionDecoratorDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testExceptionDecoratorService.remove(+id);
  }
}
