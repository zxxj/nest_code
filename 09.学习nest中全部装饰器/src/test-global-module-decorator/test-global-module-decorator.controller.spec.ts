import { Test, TestingModule } from '@nestjs/testing';
import { TestGlobalModuleDecoratorController } from './test-global-module-decorator.controller';
import { TestGlobalModuleDecoratorService } from './test-global-module-decorator.service';

describe('TestGlobalModuleDecoratorController', () => {
  let controller: TestGlobalModuleDecoratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestGlobalModuleDecoratorController],
      providers: [TestGlobalModuleDecoratorService],
    }).compile();

    controller = module.get<TestGlobalModuleDecoratorController>(TestGlobalModuleDecoratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
