import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Article } from './Article';

@Entity({
  name: 'x_tag',
})
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 50,
    comment: '标签名称',
  })
  name: string;

  @ManyToMany(() => Article, (article) => article.tags)
  articles: Article[];
}
