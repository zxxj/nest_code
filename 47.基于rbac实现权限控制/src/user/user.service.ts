import { HttpException, Injectable } from '@nestjs/common';
import { Role } from './entities/role.entity';
import { User } from './entities/user.entity';
import { Permisstion } from './entities/permisstion.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager, In } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  async initData() {
    const user1 = new User();
    user1.username = 'zhangxinxin';
    user1.password = '123456';

    const user2 = new User();
    user2.username = 'kobe';
    user2.password = '222222';

    const user3 = new User();
    user3.username = 'jordan';
    user3.password = '333333';

    const role1 = new Role();
    role1.name = '管理员';

    const role2 = new Role();
    role2.name = '普通用户';

    const premisstion1 = new Permisstion();
    premisstion1.name = '新增_aaa';

    const premisstion2 = new Permisstion();
    premisstion2.name = '修改_aaa';

    const premisstion3 = new Permisstion();
    premisstion3.name = '查询_aaa';

    const premisstion4 = new Permisstion();
    premisstion4.name = '删除_aaa';

    const premisstion5 = new Permisstion();
    premisstion5.name = '新增_bbb';

    const premisstion6 = new Permisstion();
    premisstion6.name = '修改_bbb';

    const premisstion7 = new Permisstion();
    premisstion7.name = '查询_bbb';

    const premisstion8 = new Permisstion();
    premisstion8.name = '删除_bbb';

    role1.permisstions = [
      premisstion1,
      premisstion2,
      premisstion3,
      premisstion4,
      premisstion5,
      premisstion6,
      premisstion7,
      premisstion8,
    ];

    role2.permisstions = [
      premisstion1,
      premisstion2,
      premisstion3,
      premisstion4,
    ];

    user1.roles = [role1];

    user2.roles = [role2];

    user3.roles = [role2];

    await this.entityManager.save(Permisstion, [
      premisstion1,
      premisstion2,
      premisstion3,
      premisstion4,
      premisstion5,
      premisstion6,
      premisstion7,
      premisstion8,
    ]);

    await this.entityManager.save(Role, [role1, role2]);

    await this.entityManager.save(User, [user1, user2, user3]);
  }

  async login(loginUser: LoginUserDto) {
    const foundUser = await this.entityManager.findOne(User, {
      where: {
        username: loginUser.username,
      },
      relations: {
        roles: true,
      },
    });

    if (!foundUser) throw new HttpException('用户名不存在', 500);

    if (loginUser.password !== foundUser.password)
      throw new HttpException('密码错误', 500);

    return foundUser;
  }

  async findRolesByIds(roleIds: number[]) {
    return this.entityManager.find(Role, {
      where: {
        id: In(roleIds),
      },
      relations: {
        permisstions: true,
      },
    });
  }
}
