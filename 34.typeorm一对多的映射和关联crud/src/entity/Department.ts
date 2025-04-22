import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Employee } from './Employee';

@Entity({
  name: 'x_department',
})
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
  })
  name: string;

  /**
   *  一对多关系更多还是在一的那一方来保持关系;
   * 加上 @OneToMany 装饰器,再设置下 cascade
   *  */
  @OneToMany(() => Employee, (employee) => employee.department, {
    cascade: true,
  })
  employees: Employee[];
}
