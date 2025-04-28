import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Role } from './role.entity';

@Entity()
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

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'user_role_relation',
  })
  roles: Role[];
}
