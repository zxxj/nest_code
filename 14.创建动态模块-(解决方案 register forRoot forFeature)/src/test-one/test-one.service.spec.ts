import { Test, TestingModule } from '@nestjs/testing';
import { TestOneService } from './test-one.service';

describe('TestOneService', () => {
  let service: TestOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestOneService],
    }).compile();

    service = module.get<TestOneService>(TestOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
