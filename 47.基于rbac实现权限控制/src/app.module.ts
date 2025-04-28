import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { Role } from './user/entities/role.entity';
import { Permisstion } from './user/entities/permisstion.entity';
import { JwtModule } from '@nestjs/jwt';
import { AaaModule } from './aaa/aaa.module';
import { BbbModule } from './bbb/bbb.module';
import { APP_GUARD } from '@nestjs/core';
import { LoginGuard } from './login.guard';
import { PermisstionGuard } from './permisstion.guard';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'rbac_test',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '123456',
      entities: [User, Role, Permisstion],
      synchronize: true,
      logging: true,
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {
        authPlugin: 'sha256_password',
      },
    }),
    JwtModule.register({
      global: true,
      secret: 'xin',
      signOptions: {
        expiresIn: '7d',
      },
    }),
    UserModule,
    AaaModule,
    BbbModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: LoginGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PermisstionGuard,
    },
  ],
})
export class AppModule {}
