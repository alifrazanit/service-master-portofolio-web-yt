import { Injectable } from '@nestjs/common';
import { userData } from '../../mocks/users';
@Injectable()
export class UserService {
    getUser(){
        return userData;
    }
}
