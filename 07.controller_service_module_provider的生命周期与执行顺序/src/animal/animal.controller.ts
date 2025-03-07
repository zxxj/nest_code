import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  OnModuleInit,
  OnApplicationBootstrap,
  OnModuleDestroy,
  BeforeApplicationShutdown,
  OnApplicationShutdown,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Controller('animal')
export class AnimalController
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  constructor(private readonly animalService: AnimalService) {}

  onModuleInit() {
    console.log('AnimalController: onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AnimalController: onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('AnimalController: onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string | undefined) {
    console.log(`AnimalController: beforeApplicationShutdown signal:${signal}`);
  }

  onApplicationShutdown(signal?: string | undefined) {
    console.log(`AnimalController: onApplicationShutdown signal:${signal}`);
  }

  @Post()
  create(@Body() createAnimalDto: CreateAnimalDto) {
    return this.animalService.create(createAnimalDto);
  }

  @Get()
  findAll() {
    return this.animalService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animalService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAnimalDto: UpdateAnimalDto) {
    return this.animalService.update(+id, updateAnimalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animalService.remove(+id);
  }
}
