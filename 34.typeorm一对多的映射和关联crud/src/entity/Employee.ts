import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Department } from './Department';

@Entity({
  name: 'x_employee',
})
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  @ManyToOne(() => Department)
  department: Department;
}
