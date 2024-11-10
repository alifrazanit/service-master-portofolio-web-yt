import { Injectable, NotFoundException } from '@nestjs/common';
import { userData } from '../../mocks/userData';
import { findUserDto } from 'src/dto/user.dto';

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

}
