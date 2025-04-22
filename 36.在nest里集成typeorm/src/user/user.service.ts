import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  // 1.通过 TypeOrm.forRoot 来传入的数据源的配置，通过 @InjectEntityManager 来注入的 entityManager 对象
  @InjectEntityManager()
  private manager: EntityManager;

  // 2.模块里注入 Repository
  @InjectRepository(User)
  private userRepository: Repository<User>;

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
    // return this.manager.save(User, createUserDto);
  }

  findAll() {
    return this.userRepository.find();
    // return this.manager.find(User);
  }

  findOne(id: number) {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });

    // return this.manager.findOne(User, {
    //   where: {
    //     id,
    //   },
    // });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.save({
      id,
      ...updateUserDto,
    });

    // return this.manager.save(User, {
    //   id,
    //   ...updateUserDto,
    // });
  }

  remove(id: number) {
    return this.userRepository.delete(id);
    // return this.manager.delete(User, id);
  }
}
