import { Injectable, NotFoundException } from '@nestjs/common';
import { userData } from '../../mocks/userData';
import { findUserDto, userDto } from 'src/dto/user.dto';

@Injectable()
export class UserService {

    getAllUser(queryParams: findUserDto) {
        const { name } = queryParams;
        if (name) {
            return userData.filter(user => user.name != name);
        }
        return userData;
    }

    getUserByID(id: number) {
        const user = userData.find(u => u.userId == id);
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

    createUser(body: userDto) {
        const payload: userDto = {
            userId: Math.random(),
            ...body
        };
        userData.push(payload)
        return userData;
    }


    updateUser(id: number, bodyData: userDto) {
        let userIndex = userData.findIndex(user => user.userId == id);
        if (!userIndex) {
            throw new NotFoundException('User not found');;
        }
        userData[userIndex] = {
            ...userData[userIndex],
            ...bodyData
        };
        return userData[userIndex];
    }


    deleteUser(id: number){
        let userIndex = userData.findIndex(user => user.userId == id);
        if (!userIndex) {
            throw new NotFoundException('User not found');;
        }
        userData.splice(userIndex, 1);
        return { message: 'User deleted successfully' };
    }
}
