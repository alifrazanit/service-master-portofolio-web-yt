import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class m_achievements {
    @PrimaryGeneratedColumn()
    achievementId: number;

    @Column({
        type: 'varchar',
        length: 50
    })
    achievementTitle: string;

    @Column({
        type: 'varchar',
        length: 225
    })
    image: string;

    @Column({
        type: 'text',
    })
    achievementContent: string;

    @Column({
        type: 'varchar',
        length: 50
    })
    achievementSubtitle: string;
}