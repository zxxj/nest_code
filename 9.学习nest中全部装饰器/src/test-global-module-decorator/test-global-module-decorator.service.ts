import { Injectable } from '@nestjs/common';
import { CreateTestGlobalModuleDecoratorDto } from './dto/create-test-global-module-decorator.dto';
import { UpdateTestGlobalModuleDecoratorDto } from './dto/update-test-global-module-decorator.dto';

@Injectable()
export class TestGlobalModuleDecoratorService {
  create(createTestGlobalModuleDecoratorDto: CreateTestGlobalModuleDecoratorDto) {
    return 'This action adds a new testGlobalModuleDecorator';
  }

  findAll() {
    return `This action returns all testGlobalModuleDecorator`;
  }

  findOne(id: number) {
    return `This action returns a #${id} testGlobalModuleDecorator`;
  }

  update(id: number, updateTestGlobalModuleDecoratorDto: UpdateTestGlobalModuleDecoratorDto) {
    return `This action updates a #${id} testGlobalModuleDecorator`;
  }

  remove(id: number) {
    return `This action removes a #${id} testGlobalModuleDecorator`;
  }
}
