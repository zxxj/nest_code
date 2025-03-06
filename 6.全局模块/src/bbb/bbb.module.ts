import { Module } from '@nestjs/common';
import { BbbService } from './bbb.service';
import { BbbController } from './bbb.controller';
import { AaaModule } from 'src/aaa/aaa.module';

@Module({
  // imports: [AaaModule], // 导入其他模块
  controllers: [BbbController],
  providers: [BbbService],
})
export class BbbModule {}
