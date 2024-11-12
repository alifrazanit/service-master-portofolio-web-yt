import { Injectable, NotFoundException } from '@nestjs/common';
import { userData } from '../../mocks/userData';
import { findUserDto, UserDto } from 'src/dto/user.dto';

@Injectable()
export class UserService {

    getAllUser(param: findUserDto){
        if(param && param.name){
            const user = userData.filter(user => String(user.name).toLowerCase() === String(param.name).toLowerCase())
            if(user.length == 0){
                return new NotFoundException('User not found')
            }
            return user;
        }
        return userData;
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
