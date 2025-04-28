import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  async login(loginUser: LoginUserDto) {
    const foundUser = await this.entityManager.findOne(User, {
      where: {
        username: loginUser.username,
      },
    });

    if (!foundUser)
      throw new HttpException('用户名不存在', HttpStatus.INTERNAL_SERVER_ERROR);

    if (loginUser.password !== foundUser.password)
      throw new HttpException('密码错误', HttpStatus.INTERNAL_SERVER_ERROR);

    return foundUser;
  }
}
