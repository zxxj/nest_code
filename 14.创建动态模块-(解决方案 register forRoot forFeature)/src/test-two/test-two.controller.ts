import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
} from '@nestjs/common';
import { TestTwoService } from './test-two.service';
import { CreateTestTwoDto } from './dto/create-test-two.dto';
import { UpdateTestTwoDto } from './dto/update-test-two.dto';
import {
  MODULE_OPTIONS_TOKEN,
  TestTwoModuleOpions,
} from './testTwo.module.definition';

@Controller('test-two')
export class TestTwoController {
  constructor(private readonly testTwoService: TestTwoService) {}

  @Inject(MODULE_OPTIONS_TOKEN)
  private options: TestTwoModuleOpions;

  @Post()
  create(@Body() createTestTwoDto: CreateTestTwoDto) {
    return this.testTwoService.create(createTestTwoDto);
  }

  @Get()
  findAll() {
    console.log(this.options);
    return this.testTwoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testTwoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestTwoDto: UpdateTestTwoDto) {
    return this.testTwoService.update(+id, updateTestTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testTwoService.remove(+id);
  }
}
