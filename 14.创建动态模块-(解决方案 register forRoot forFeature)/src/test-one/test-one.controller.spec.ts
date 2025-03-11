import { Test, TestingModule } from '@nestjs/testing';
import { TestOneController } from './test-one.controller';
import { TestOneService } from './test-one.service';

describe('TestOneController', () => {
  let controller: TestOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestOneController],
      providers: [TestOneService],
    }).compile();

    controller = module.get<TestOneController>(TestOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
