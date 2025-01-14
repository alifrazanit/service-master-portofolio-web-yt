import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_testimonials {
    @PrimaryGeneratedColumn()
    idTestimonials: number;

    @Column({
        type: 'text'
    })
    testimonialsContent: string;

    @Column({
        type: 'varchar',
        length: 30
    })
    author: string;

    @Column({
        type: 'varchar',
        length: 30
    })
    lastRole: string;

    @Column({
        type: 'date',
    })
    graduationDate: any;

    @Column({
        type: 'varchar',
        length: 225
    })
    authorImage: string;
}