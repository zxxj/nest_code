import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Premisstion } from './user/entities/premisstion.entity';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      database: 'acl_test',
      username: 'root',
      password: '123456',
      synchronize: true,
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql2',
      entities: [User, Premisstion],
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    UserModule,
    AaaModule,
    BbbModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
