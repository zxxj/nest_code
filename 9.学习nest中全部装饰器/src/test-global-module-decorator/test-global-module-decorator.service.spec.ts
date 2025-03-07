import { Test, TestingModule } from '@nestjs/testing';
import { TestGlobalModuleDecoratorService } from './test-global-module-decorator.service';

describe('TestGlobalModuleDecoratorService', () => {
  let service: TestGlobalModuleDecoratorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestGlobalModuleDecoratorService],
    }).compile();

    service = module.get<TestGlobalModuleDecoratorService>(TestGlobalModuleDecoratorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
