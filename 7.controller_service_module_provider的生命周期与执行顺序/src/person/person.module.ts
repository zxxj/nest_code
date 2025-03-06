import {
  BeforeApplicationShutdown,
  Module,
  OnApplicationBootstrap,
  OnApplicationShutdown,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { PersonController } from './person.controller';

@Module({
  controllers: [PersonController],
  providers: [PersonService],
})
export class PersonModule
  implements
    OnModuleInit,
    OnApplicationBootstrap,
    OnModuleDestroy,
    BeforeApplicationShutdown,
    OnApplicationShutdown
{
  onModuleInit() {
    console.log('PersonModule: onModuleInit');
  }

  onApplicationBootstrap() {
    console.log('PersonModule: onApplicationBootstrap');
  }

  onModuleDestroy() {
    console.log('PersonModule: onModuleDestroy');
  }

  beforeApplicationShutdown(signal?: string | undefined) {
    console.log(`PersonModule: beforeApplicationShutdown signal:${signal}`);
  }

  onApplicationShutdown(signal?: string | undefined) {
    console.log(`PersonModule: onApplicationShutdown signal:${signal}`);
  }
}
