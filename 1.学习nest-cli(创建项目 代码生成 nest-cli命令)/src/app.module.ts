import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { AnimalModule } from './animal/animal.module';

@Module({
  imports: [StudentModule, TeacherModule, AnimalModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
