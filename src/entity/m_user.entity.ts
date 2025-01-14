import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_user{
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column({
        type:'varchar',
        length: 30
    })
    name: string;

    @Column({
        type:'varchar',
        length: 30,
        unique: true,
        
    })
    username: string;

    @Column({
        type:'varchar',
        length: 50,
    })
    password: string;

    @Column({
        type:'varchar',
        length: 225,
    })
    image: string;
}