import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class m_user {
    @PrimaryGeneratedColumn()
    userId: number;

    @Column({
        type: 'varchar',
        length: 20,
    })
    name: string;

    @Column({
        type: 'varchar',
        length: 20,
        unique: true
    })
    username: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    password: string;
}