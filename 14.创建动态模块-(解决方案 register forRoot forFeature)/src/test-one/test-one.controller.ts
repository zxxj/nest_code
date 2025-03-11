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
import { TestOneService } from './test-one.service';
import { CreateTestOneDto } from './dto/create-test-one.dto';
import { UpdateTestOneDto } from './dto/update-test-one.dto';

@Controller('test-one')
export class TestOneController {
  constructor(private readonly testOneService: TestOneService) {}

  @Inject('CONFIG_OPTIONS')
  private readonly configOptions: Record<string, any>;

  @Post()
  create(@Body() createTestOneDto: CreateTestOneDto) {
    return this.testOneService.create(createTestOneDto);
  }

  @Get()
  findAll() {
    console.log(this.configOptions);
    return this.testOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testOneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestOneDto: UpdateTestOneDto) {
    return this.testOneService.update(+id, updateTestOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testOneService.remove(+id);
  }
}
