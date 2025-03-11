import { Test, TestingModule } from '@nestjs/testing';
import { TestTwoService } from './test-two.service';

describe('TestTwoService', () => {
  let service: TestTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestTwoService],
    }).compile();

    service = module.get<TestTwoService>(TestTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
