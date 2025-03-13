import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModuleOneModule } from './module-one/module-one.module';

@Module({
  imports: [ModuleOneModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
