import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalController } from './animal.controller';
import { ModuleRef } from '@nestjs/core';

@Module({
  controllers: [AnimalController],
  providers: [AnimalService],
})
export class AnimalModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  // moduleRef 就是当前模块的引用
  constructor(private readonly moduleRef: ModuleRef) {}

  onModuleInit() {
    console.log('AnimalModule: onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('AnimalModule: onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('AnimalModule: onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string | undefined) {
    console.log(`AnimalModule: beforeApplicationShutdown signal:${signal}`);
  }

  onApplicationShutdown(signal?: string | undefined) {
    // moduleRef 就是当前模块的引用
    const animalService = this.moduleRef.get<AnimalService>(AnimalService);
    console.log('---- =>', animalService.findAll());
    console.log(`AnimalModule: onApplicationShutdown signal:${signal}`);
  }
}
