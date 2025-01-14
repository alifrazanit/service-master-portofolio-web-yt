import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_school {
    @PrimaryGeneratedColumn()
    idSchool: number;

    @Column({
        type: 'varchar',
        length: 30
    })
    schoolName: string;

    @Column({
        type: 'varchar',
        length: 15,
        unique: true
    })
    phone: string;

    @Column({
        type: 'varchar',
        length: 30,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 225,
    })
    logo: string;

    @Column({
        type: 'text',
    })
    motto: string;

    @Column({
        type: 'text',
    })
    address: string;
}