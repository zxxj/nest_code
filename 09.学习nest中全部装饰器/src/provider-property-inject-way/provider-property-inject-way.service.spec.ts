import { Test, TestingModule } from '@nestjs/testing';
import { ProviderPropertyInjectWayService } from './provider-property-inject-way.service';

describe('ProviderPropertyInjectWayService', () => {
  let service: ProviderPropertyInjectWayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProviderPropertyInjectWayService],
    }).compile();

    service = module.get<ProviderPropertyInjectWayService>(ProviderPropertyInjectWayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
