import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [PersonModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
