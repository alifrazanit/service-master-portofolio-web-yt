import { Controller, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { UserService } from '../../../services/user/user.service';
import { findUserDto } from 'src/dto/user.dto';

@Controller('master/user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    GetAllUser(
        @Query() filter: findUserDto
    ){
        return this.userService.getAllUser(filter);
    }

    @Get(':id')
    GetUserByID(
        @Param('id', ParseIntPipe) id: number
    ){
        return this.userService.getUserByID(id);
    }

    
}


