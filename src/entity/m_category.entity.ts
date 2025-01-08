import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_category {
    @PrimaryGeneratedColumn()
    newsCategoryId: number;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true
    })
    category: string;
}