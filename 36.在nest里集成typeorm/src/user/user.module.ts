import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  /**
   * 只不过现在是通过 TypeOrm.forRoot 来传入的数据源的配置，通过 @InjectEntityManager 来注入的 entityManager 对象。直接用 EntityManager 的缺点是每个 api 都要带上对应的 Entity.
   * 简便方法就是先 getRepository(User) 拿到 user 对应的 Repository 对象，再调用这些方法。那还不如直接注入 User 对应的 Respository 就好了。
   * Nest 对这个做了封装，在 user 模块引入 TypeOrmModule.forFeature 对应的动态模块，传入 User 的 Entity
   */
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
