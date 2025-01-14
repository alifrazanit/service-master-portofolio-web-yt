import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { m_achievements } from 'src/entity/m_achievements.entity';
import { m_news } from 'src/entity/m_news.entity';
import { m_newsCategory } from 'src/entity/m_newsCategory.entity';
import { m_school } from 'src/entity/m_school.entity';
import { m_testimonials } from 'src/entity/m_testimonials.entity';
import { m_user } from 'src/entity/m_user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            m_achievements,
            m_news,
            m_newsCategory,
            m_school,
            m_testimonials,
            m_user,
        ])
    ],
    exports: [
        TypeOrmModule
    ]
})
export class EntityModule { }
