import {  Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { User } from "./User"

@Entity({
	name: "id_card"
})
export class IdCard {

	@PrimaryGeneratedColumn()
	id: number

	@Column({
		length: 50,
		comment: "身份证号"
	})
	cardName: string

	@JoinColumn()
	@OneToOne(() => User, {
		onDelete: 'CASCADE', // 指定级联关系,默认为RESTRICT
		onUpdate: 'CASCADE',
		cascade: true // 这个cascade不是数据库的那个级联,而是告诉typeorm当你增删改一个Entity的时候,是否级联增删改它关联的Entity
	})
	user: User
}
