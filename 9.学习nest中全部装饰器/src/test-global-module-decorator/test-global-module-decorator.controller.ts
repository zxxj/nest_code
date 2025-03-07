import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestGlobalModuleDecoratorService } from './test-global-module-decorator.service';
import { CreateTestGlobalModuleDecoratorDto } from './dto/create-test-global-module-decorator.dto';
import { UpdateTestGlobalModuleDecoratorDto } from './dto/update-test-global-module-decorator.dto';

@Controller('test-global-module-decorator')
export class TestGlobalModuleDecoratorController {
  constructor(private readonly testGlobalModuleDecoratorService: TestGlobalModuleDecoratorService) {}

  @Post()
  create(@Body() createTestGlobalModuleDecoratorDto: CreateTestGlobalModuleDecoratorDto) {
    return this.testGlobalModuleDecoratorService.create(createTestGlobalModuleDecoratorDto);
  }

  @Get()
  findAll() {
    return this.testGlobalModuleDecoratorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testGlobalModuleDecoratorService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestGlobalModuleDecoratorDto: UpdateTestGlobalModuleDecoratorDto) {
    return this.testGlobalModuleDecoratorService.update(+id, updateTestGlobalModuleDecoratorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testGlobalModuleDecoratorService.remove(+id);
  }
}
