import {
  BeforeApplicationShutdown,
  Injectable,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { CreateAnimalDto } from './dto/create-animal.dto';
import { UpdateAnimalDto } from './dto/update-animal.dto';

@Injectable()
export class AnimalService
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('AnimalService: onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AnimalService: onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('AnimalService: onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string | undefined) {
    console.log(`AnimalService: beforeApplicationShutdown signal:${signal}`);
  }

  onApplicationShutdown(signal?: string | undefined) {
    console.log(`AnimalService: onApplicationShutdown signal:${signal}`);
  }

  create(createAnimalDto: CreateAnimalDto) {
    return 'This action adds a new animal';
  }

  findAll() {
    return `This action returns all animal`;
  }

  findOne(id: number) {
    return `This action returns a #${id} animal`;
  }

  update(id: number, updateAnimalDto: UpdateAnimalDto) {
    return `This action updates a #${id} animal`;
  }

  remove(id: number) {
    return `This action removes a #${id} animal`;
  }
}
