import { Controller, Get, Param, ParseIntPipe, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from '../../../services/user/user.service';
import { findUserDto, UserDto } from 'src/dto/user.dto';

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

    @Post('/create')
    CreateUser(
        @Body() bodyParam: UserDto
    ){
        return this.userService.createUser(bodyParam);
    }

    @Put('/:id/update')
    UpdateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() bodyParam: UserDto
    ){
        return this.userService.updateUser(id, bodyParam);
    }


    @Delete('/:id/delete')
    DeleteUser(
        @Param('id', ParseIntPipe) id: number
    ){
        return this.userService.deleteUser(id);
    }

    
}


