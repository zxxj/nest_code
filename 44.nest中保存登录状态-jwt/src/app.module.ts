import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      secret: 'xin', // 加密 jwt 的密钥
      signOptions: {
        expiresIn: '7d', //  token 过期时间
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
