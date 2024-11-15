import { Injectable, NotFoundException } from '@nestjs/common';
import { userData } from '../../mocks/userData';
import { findUserDto, UserDto } from 'src/dto/user.dto';
import { userRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
    constructor(
        private userRepository: userRepository
    ){ }


    getAllUser(param: findUserDto){
        const queryParam = {
            'name': param.name ? param.name : '' 
        }
        const existingData = this.userRepository.find(queryParam);
        return existingData;
    }

    getUserByID(id: number){
        const user = userData.find(u => u.userId == id);
        return user;
    }

    createUser(body: UserDto){
        const payload: UserDto = {
            userId: Math.random(),
            ...body
        }
        userData.push(payload);
        return payload;
    }

    updateUser(id: number, body: UserDto){
        const isUserExist = userData.findIndex(user => user.userId == id);
        if(isUserExist == -1){
            return new NotFoundException('User not found')
        }
        userData[isUserExist] = {
            ...userData[isUserExist],
            ...body
        };

        return userData[isUserExist];
    }

    deleteUser(id: number){
        const isUserExist = userData.findIndex(user => user.userId == id);
        if(isUserExist == -1){
            return new NotFoundException('User not found')
        }
        userData.splice(isUserExist, 1);
        return true;
    }

}
