import { Test, TestingModule } from '@nestjs/testing';
import { TestTwoController } from './test-two.controller';
import { TestTwoService } from './test-two.service';

describe('TestTwoController', () => {
  let controller: TestTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestTwoController],
      providers: [TestTwoService],
    }).compile();

    controller = module.get<TestTwoController>(TestTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
