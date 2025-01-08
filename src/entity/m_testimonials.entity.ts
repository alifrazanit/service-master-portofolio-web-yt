import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_testimonials {
    @PrimaryGeneratedColumn()
    idTestimonial: number;

    @Column({
        type: 'text',
    })
    testimonialContent: string;

    @Column({
        type: 'varchar',
        length: 80,
    })
    author: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    lastRole: string;

    @Column({
        type: 'date',
    })
    graduationDate: string;

    @Column({
        type: 'varchar',
        length: 225,
    })
    authorImage: string;
}