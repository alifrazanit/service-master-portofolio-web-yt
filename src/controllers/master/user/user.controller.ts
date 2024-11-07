import { Controller, Get, Param, ParseIntPipe, Query, Post, Body, Put, Delete } from '@nestjs/common';
import { UserService } from '../../../services/user/user.service';
import { findUserDto, userDto} from '../../../dto/user.dto';


@Controller('master/user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    GetAllUser(@Query() filterData: findUserDto){
        return this.userService.getAllUser(filterData);
    }

    @Get(':id')
    GetUserByID(
        @Param('id', ParseIntPipe) id: number
    ){
        return this.userService.getUserByID(id);
    }

    @Post('/create')
    CreateUser(
        @Body() body: userDto
    ){
        return this.userService.createUser(body);
    }

    @Put('/:id/update')
    UpdateUser(
        @Param('id', ParseIntPipe) id: number,
        @Body() body: userDto
    ){
        return this.userService.updateUser(id, body);
    }

    @Delete('/:id/delete')
    DeleteUser(
        @Param('id', ParseIntPipe) id: number
    ) {

    }

   
}


