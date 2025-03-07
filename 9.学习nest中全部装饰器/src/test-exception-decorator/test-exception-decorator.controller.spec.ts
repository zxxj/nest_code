import { Test, TestingModule } from '@nestjs/testing';
import { TestExceptionDecoratorController } from './test-exception-decorator.controller';
import { TestExceptionDecoratorService } from './test-exception-decorator.service';

describe('TestExceptionDecoratorController', () => {
  let controller: TestExceptionDecoratorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestExceptionDecoratorController],
      providers: [TestExceptionDecoratorService],
    }).compile();

    controller = module.get<TestExceptionDecoratorController>(TestExceptionDecoratorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
