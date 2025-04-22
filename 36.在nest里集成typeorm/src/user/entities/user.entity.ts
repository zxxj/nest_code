import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'x_user',
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'user_name',
    length: 50,
  })
  name: string;
}
