import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'x_premisstion',
})
export class Premisstion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @Column({
    length: 100,
    nullable: true,
  })
  desc: string;

  @CreateDateColumn({
    comment: '创建时间',
  })
  createDate: Date;

  @UpdateDateColumn({
    comment: '更新时间',
  })
  updateDate: Date;
}
