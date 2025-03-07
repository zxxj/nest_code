import { Module } from '@nestjs/common';
import { ProviderPropertyInjectWayService } from './provider-property-inject-way.service';
import { ProviderPropertyInjectWayController } from './provider-property-inject-way.controller';

@Module({
  controllers: [ProviderPropertyInjectWayController],
  providers: [ProviderPropertyInjectWayService],
})
export class ProviderPropertyInjectWayModule {}
