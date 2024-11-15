import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { m_user } from 'src/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            m_user
        ]),
    ],
    exports: [
        TypeOrmModule
    ]
})
export class EntitiesModule { }
