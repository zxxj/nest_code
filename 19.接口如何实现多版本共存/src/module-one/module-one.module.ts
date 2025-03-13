import { Module } from '@nestjs/common';
import { ModuleOneService } from './module-one.service';
import { ModuleOneController } from './module-one.controller';
import { ModuleOneV2Controller } from './module-one-v2.controller';

@Module({
  controllers: [ModuleOneV2Controller, ModuleOneController],
  providers: [ModuleOneService],
})
export class ModuleOneModule {}
