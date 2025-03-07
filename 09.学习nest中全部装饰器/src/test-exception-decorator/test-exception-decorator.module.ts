import { Module } from '@nestjs/common';
import { TestExceptionDecoratorService } from './test-exception-decorator.service';
import { TestExceptionDecoratorController } from './test-exception-decorator.controller';

@Module({
  controllers: [TestExceptionDecoratorController],
  providers: [TestExceptionDecoratorService],
})
export class TestExceptionDecoratorModule {}
