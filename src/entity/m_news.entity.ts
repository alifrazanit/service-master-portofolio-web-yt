import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { m_category } from './m_category.entity';


@Entity()
export class m_news {
    @PrimaryGeneratedColumn()
    idNews: number;

    @Column({
        type: 'varchar',
        length: 50
    })
    newsTitle: string;

    @Column({
        type: 'text',
    })
    newsContent: string;

    // @Column({
    //     type: 'int',
    // })
    // newsCategoryId: number;

    @Column({
        type: 'date',
    })
    createdDate: string;

    @Column({
        type: 'date',
    })
    updatedDate: string;

    @Column({
        type: 'varchar',
        length: 225
    })
    bannerImage: string;

    @Column({
        type: 'varchar',
        length: 100
    })
    author: string;

    @ManyToOne(() => m_category, (category) => category.news)
    // @JoinColumn({ name: 'newsCategoryId' })
    category: m_category[];
}