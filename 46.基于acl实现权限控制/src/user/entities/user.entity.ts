import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Premisstion } from './premisstion.entity';

@Entity({
  name: 'x_user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    comment: '用户名',
    length: 50,
  })
  username: string;

  @Column({
    comment: '密码',
    length: 50,
  })
  password: string;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createDate: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateDate: Date;

  @ManyToMany(() => Premisstion) // 通过manytomany声明和premisstion的多对多关系
  // 多对多是需要中间表的,通过jointable声明,指定中间表的名字为user_permisstion_relation
  @JoinTable({
    name: 'user_permisstion_relation',
  })
  premisstions: Premisstion[];
}
