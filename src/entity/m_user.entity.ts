import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_user {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        type:'varchar',
        length: 20
    })
    name: string;

    @Column({
        type:'varchar',
        length:30,
        unique: true
    })
    username: string;

    @Column({
        type:'varchar',
        length: 30
    })
    password: string;
}