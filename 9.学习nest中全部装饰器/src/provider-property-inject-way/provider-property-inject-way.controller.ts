import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProviderPropertyInjectWayService } from './provider-property-inject-way.service';
import { CreateProviderPropertyInjectWayDto } from './dto/create-provider-property-inject-way.dto';
import { UpdateProviderPropertyInjectWayDto } from './dto/update-provider-property-inject-way.dto';

@Controller('provider-property-inject-way')
export class ProviderPropertyInjectWayController {
  constructor(private readonly providerPropertyInjectWayService: ProviderPropertyInjectWayService) {}

  @Post()
  create(@Body() createProviderPropertyInjectWayDto: CreateProviderPropertyInjectWayDto) {
    return this.providerPropertyInjectWayService.create(createProviderPropertyInjectWayDto);
  }

  @Get()
  findAll() {
    return this.providerPropertyInjectWayService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.providerPropertyInjectWayService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProviderPropertyInjectWayDto: UpdateProviderPropertyInjectWayDto) {
    return this.providerPropertyInjectWayService.update(+id, updateProviderPropertyInjectWayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.providerPropertyInjectWayService.remove(+id);
  }
}
