import { Module, forwardRef } from '@nestjs/common';
import { TestTwoModule } from 'src/test-two/test-two.module';

// forwardRef: nest会单独创建TestOne和TestTwo这两个Module,然后再把Module的引用转发过去
@Module({
  imports: [forwardRef(() => TestTwoModule)],
})
export class TestOneModule {}
