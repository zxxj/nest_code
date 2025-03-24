import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MyLogger2 } from './MyLogger2';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MyLogger2],
})
export class AppModule {}
