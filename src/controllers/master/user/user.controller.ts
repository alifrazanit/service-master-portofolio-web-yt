import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from '../../../services/user/user.service';

@Controller('master/user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    GetAllUser(){
        return this.userService.getAllUser();
    }

    @Get(':id')
    GetUserByID(
        @Param('id') id: number
    ){
        console.log('id', id)
        return this.userService.getUserByID(id);
    }
}


