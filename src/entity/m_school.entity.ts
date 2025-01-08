import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_school {
    @PrimaryGeneratedColumn()
    idSchool: number;

    @Column({
        type: 'varchar',
        length: 50
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
        length: 50,
        unique: true
    })
    email: string;

    @Column({
        type: 'varchar',
        length: 225
    })
    logo: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    motto: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    address: string;
}