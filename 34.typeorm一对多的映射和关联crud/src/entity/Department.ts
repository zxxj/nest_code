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
<<<<<<< HEAD
   *  一对多关系更多还是在一的那一方来保持关系;
   * 加上 @OneToMany 装饰器,再设置下 cascade
   *  */
=======
   * 一对多的关系更多还是在一的那一方来保持关系
   * 这里需要通过第二个参数指定外键列在employee.deparment维护:  (employee) => employee.department
   * */
>>>>>>> 6ee7985ae3369410044fb64ced872049f77acaa5
  @OneToMany(() => Employee, (employee) => employee.department, {
    cascade: true,
  })
  employees: Employee[];
}
