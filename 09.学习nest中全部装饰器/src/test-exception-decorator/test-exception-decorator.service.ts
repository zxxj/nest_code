import { Injectable, UseFilters } from '@nestjs/common';
import { CreateTestExceptionDecoratorDto } from './dto/create-test-exception-decorator.dto';
import { UpdateTestExceptionDecoratorDto } from './dto/update-test-exception-decorator.dto';
import { TestFilter } from 'src/test.filter';

@Injectable()
export class TestExceptionDecoratorService {
  create(createTestExceptionDecoratorDto: CreateTestExceptionDecoratorDto) {
    return 'This action adds a new testExceptionDecorator';
  }

  findAll() {
    return `This action returns all testExceptionDecorator`;
  }

  @UseFilters(TestFilter)
  findOne(id: number) {
    return `This action returns a #${id} testExceptionDecorator`;
  }

  update(
    id: number,
    updateTestExceptionDecoratorDto: UpdateTestExceptionDecoratorDto,
  ) {
    return `This action updates a #${id} testExceptionDecorator`;
  }

  remove(id: number) {
    return `This action removes a #${id} testExceptionDecorator`;
  }
}
