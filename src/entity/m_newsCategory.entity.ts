import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_newsCategory{
    @PrimaryGeneratedColumn()
    newsCategoryId: number;

    @Column({
        type: 'varchar',
        length: 50,
        unique: true
    })
    category: string;
}