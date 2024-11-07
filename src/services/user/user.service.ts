import { Injectable } from '@nestjs/common';
import { userData } from '../../mocks/userData';

@Injectable()
export class UserService {

    getAllUser(){
        return userData;
    }

    getUserByID(id: number){
        const user = userData.find(u => u.userId == id);
        return user;
    }

}
