import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    AuthModule,
    UserModule,
    JwtModule.register({
      secret: 'xin',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
