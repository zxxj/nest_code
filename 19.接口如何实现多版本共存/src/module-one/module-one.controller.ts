import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  VERSION_NEUTRAL,
} from '@nestjs/common';
import { ModuleOneService } from './module-one.service';
import { CreateModuleOneDto } from './dto/create-module-one.dto';
import { UpdateModuleOneDto } from './dto/update-module-one.dto';

@Controller({
  path: 'module-one',
  // version: '1', // 标记为版本1

  version: VERSION_NEUTRAL, // 如果想让所有版本都能访问这个接口需要标注为 VERSION_NEUTRAL
})
export class ModuleOneController {
  constructor(private readonly moduleOneService: ModuleOneService) {}

  @Post()
  create(@Body() createModuleOneDto: CreateModuleOneDto) {
    return this.moduleOneService.create(createModuleOneDto);
  }

  @Get()
  findAll() {
    return this.moduleOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moduleOneService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateModuleOneDto: UpdateModuleOneDto,
  ) {
    return this.moduleOneService.update(+id, updateModuleOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moduleOneService.remove(+id);
  }
}
