import { Injectable } from "@nestjs/common";
import { m_user } from '../entities/user.entity';
import { Repository, DataSource } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class userRepository {
    constructor(
        @InjectRepository(m_user)
        private readonly userRepository: Repository<m_user>,
    ) { }

    async find(query: any): Promise<m_user[]> {
        const queryBuilder = this.userRepository.createQueryBuilder('m_user');
        if (query.name) {
            queryBuilder.andWhere('m_user.name LIKE :name', { name: `%${query.name}%` });
        }
        return await queryBuilder.getMany();
    }
}