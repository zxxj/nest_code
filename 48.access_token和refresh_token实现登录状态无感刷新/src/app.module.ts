import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'xin',
      signOptions: {
        expiresIn: '30m',
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'refresh_token_test',
      username: 'root',
      password: '123456',
      host: '127.0.0.1',
      port: 3306,
      synchronize: true,
      logging: true,
      poolSize: 10,
      entities: [User],
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
