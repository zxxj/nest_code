import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


//@Entity: 指定这个类是一个Entity
@Entity({
	name: 'x_person' // 指定表名
})
export class Person {

	// @PrimaryGeneratedColumn: 自增主键, comment: 注释 
	@PrimaryGeneratedColumn({ comment: 'id' })
	id: number

	// @Column: 映射属性和字段的对应关系
	@Column({
		name: 'a_aa',
		type: 'text',
		comment: '这是aaa',
	})
	a: string

	@Column({
		name:'b_bb', // 字段名
		unique: true, // 唯一索引
		nullable: true, // 设置not null约束
		type: 'varchar', // 映射的类型
		length: 10, // 长度
		default: 'bbb' // 默认值
	})
	b: string

	@Column({
		name: 'c_cc',
		type: 'double'
	})
	c: boolean
}