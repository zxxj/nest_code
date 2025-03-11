import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestOneModule } from './test-one/test-one.module';
import { TestTwoModule } from './test-two/test-two.module';
import { TestOneService } from './test-one.service';
import { TestTwoService } from './test-two.service';

@Module({
  imports: [TestOneModule, TestTwoModule],
  controllers: [AppController],
  providers: [AppService, TestOneService, TestTwoService],
})
export class AppModule {}
