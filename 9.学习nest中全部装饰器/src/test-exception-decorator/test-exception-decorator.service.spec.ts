import { Test, TestingModule } from '@nestjs/testing';
import { TestExceptionDecoratorService } from './test-exception-decorator.service';

describe('TestExceptionDecoratorService', () => {
  let service: TestExceptionDecoratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestExceptionDecoratorService],
    }).compile();

    service = module.get<TestExceptionDecoratorService>(TestExceptionDecoratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
