import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { IdCard } from './IdCard';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  age: number;

  /**
   * 不过现在我们只是在idCard里访问user,如果想在user里访问idCard同样需要加一个@OneToOne装饰器,不过需要有第二个参数
   * 因为如果是维持外键的那个表,也就是有@JoinColumn的那个Entity,它是可以根据外键关联查到另一方的.
   * 但是现在这个没有外键的表改怎么查到另一方呢?
   * 所以这里通过第二个参数告诉typeorm,外键是另一个Entity的哪个属性.
   *  */
  @OneToOne(() => IdCard, (idCard) => idCard.user)
  idCard: IdCard;
}
