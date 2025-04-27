import { HttpException, Injectable, Logger } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import * as crypto from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from './dto/login.dto';

// 用于密码加密
const md5 = (str: string) => {
  const hash = crypto.createHash('md5');
  hash.update(str);

  return hash.digest('hex');
};

@Injectable()
export class UserService {
  // 注入user的respsitory
  @InjectRepository(User)
  private userRepository: Repository<User>;

  // 注入logger
  private logger = new Logger();

  // 处理注册
  async register(user: RegisterDto) {
    // 先在数据库中根据传入的用户名查询,如果有相同用户名存在,则表示已被注册
    const foundUser = await this.userRepository.findOneBy({
      username: user.username,
    });

    if (foundUser) throw new HttpException('用户已存在', 200);

    // 如已确认是新用户,插入到数据库
    const newUser = new User();
    newUser.username = user.username;
    newUser.password = md5(user.password);

    try {
      await this.userRepository.save(newUser);
      return '注册成功';
    } catch (error) {
      this.logger.error(error, UserService);
      return '注册失败';
    }
  }

  // 处理登录
  async login(user: LoginDto) {
    const foundUser = await this.userRepository.findOneBy({
      username: user.username,
    });

    if (!foundUser) throw new HttpException('用户名不存在', 500);

    if (foundUser.password !== md5(user.password))
      throw new HttpException('密码错误', 500);

    return foundUser;
  }
}
