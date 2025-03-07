import { Global, Module } from '@nestjs/common';
import { TestGlobalModuleDecoratorService } from './test-global-module-decorator.service';
import { TestGlobalModuleDecoratorController } from './test-global-module-decorator.controller';

@Global()
@Module({
  controllers: [TestGlobalModuleDecoratorController],
  providers: [TestGlobalModuleDecoratorService],
  exports: [TestGlobalModuleDecoratorService],
})
export class TestGlobalModuleDecoratorModule {}
