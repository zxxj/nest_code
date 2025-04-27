import { HttpException, Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityManager } from 'typeorm';
import { Premisstion } from './entities/premisstion.entity';
import { LoginUserDto } from './dto/loginUser.dto';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  async initData() {
    const permisstion1 = new Premisstion();
    permisstion1.name = 'create_aaa';
    permisstion1.desc = '新增 aaa';

    const permisstion2 = new Premisstion();
    permisstion2.name = 'update_aaa';
    permisstion2.desc = '修改 aaa';

    const permisstion3 = new Premisstion();
    permisstion3.name = 'remove_aaa';
    permisstion3.desc = '删除 aaa';

    const permisstion4 = new Premisstion();
    permisstion4.name = 'query_aaa';
    permisstion4.desc = '查询 aaa';

    const permisstion5 = new Premisstion();
    permisstion5.name = 'create_bbb';
    permisstion5.desc = '新增 bbb';

    const permisstion6 = new Premisstion();
    permisstion6.name = 'update_bbb';
    permisstion6.desc = '修改 bbb';

    const permisstion7 = new Premisstion();
    permisstion7.name = 'remove_bbb';
    permisstion7.desc = '删除 bbb';

    const permisstion8 = new Premisstion();
    permisstion8.name = 'query_bbb';
    permisstion8.desc = '查询 bbb';

    const user1 = new User();
    user1.username = '鑫鑫';
    user1.password = '123456';
    user1.premisstions = [
      permisstion1,
      permisstion2,
      permisstion3,
      permisstion4,
    ];

    const user2 = new User();
    user2.username = 'kobe';
    user2.password = '123456';
    user2.premisstions = [
      permisstion5,
      permisstion6,
      permisstion7,
      permisstion8,
    ];

    await this.entityManager.save([
      permisstion1,
      permisstion2,
      permisstion3,
      permisstion4,
      permisstion5,
      permisstion6,
      permisstion7,
      permisstion8,
    ]);
    await this.entityManager.save([user1, user2]);
  }

  async login(user: LoginUserDto) {
    const foundUser = await this.entityManager.findOneBy(User, {
      username: user.username,
    });

    if (!foundUser) throw new HttpException('用户名不存在', 500);

    if (foundUser.password !== user.password)
      throw new HttpException('密码错误', 500);

    return foundUser;
  }

  async findByUsername(username: string) {
    const user = await this.entityManager.findOne(User, {
      where: {
        username,
      },
      relations: {
        premisstions: true,
      },
    });

    return user;
  }
}
