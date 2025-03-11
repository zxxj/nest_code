import { Module, forwardRef } from '@nestjs/common';
import { TestOneModule } from 'src/test-one/test-one.module';

@Module({
  imports: [forwardRef(() => TestOneModule)],
})
export class TestTwoModule {}
