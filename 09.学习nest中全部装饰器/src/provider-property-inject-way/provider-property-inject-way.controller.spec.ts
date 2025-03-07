import { Test, TestingModule } from '@nestjs/testing';
import { ProviderPropertyInjectWayController } from './provider-property-inject-way.controller';
import { ProviderPropertyInjectWayService } from './provider-property-inject-way.service';

describe('ProviderPropertyInjectWayController', () => {
  let controller: ProviderPropertyInjectWayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProviderPropertyInjectWayController],
      providers: [ProviderPropertyInjectWayService],
    }).compile();

    controller = module.get<ProviderPropertyInjectWayController>(ProviderPropertyInjectWayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
