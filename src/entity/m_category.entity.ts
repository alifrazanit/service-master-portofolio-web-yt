import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { m_news } from './m_news.entity';


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

    @OneToMany(() => m_news, (news) => news.category)
    @JoinColumn({ name: 'newsCategoryId' })
    news: m_news
}