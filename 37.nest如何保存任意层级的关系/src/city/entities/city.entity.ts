import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
// 一般都是用 closure-table，或者 materialized-path 这两种方式一个用单表存储，一个用两个表，但实现的效果是一样的
@Tree('closure-table')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: 0,
  })
  status: number;

  @CreateDateColumn()
  createDate: Date;

  @UpdateDateColumn()
  updateDate: Date;

  @Column()
  name: string;

  // 通过@TreeChildren声明的属性里存储着它的children节点
  @TreeChildren()
  children: City[];

  // 通过TreeParent声明的属性里存储着它的parent节点
  @TreeParent()
  parent: City;
}
