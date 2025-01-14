import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_news {
    @PrimaryGeneratedColumn()
    idNews: number;

    @Column({
        type: 'varchar',
        length: 100
    })
    newsTitle: string;

    @Column({
        type: 'text'
    })
    newsContent: string;

    @Column({
        type: 'int'
    })
    newsCategoryId: number;

    @Column({
        type: 'date'
    })
    createdDate: any;

    @Column({
        type: 'date'
    })
    updatedDate: any;

    @Column({
        type: 'varchar',
        length: 225
    })
    bannerImage: string;

    @Column({
        type: 'varchar',
        length: 30
    })
    author: string;
}