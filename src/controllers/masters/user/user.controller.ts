import { Controller, Get } from '@nestjs/common';
import { UserService } from '../../../services/user/user.service';


@Controller('master/user')
export class UserController {
    constructor(
        private userService: UserService
    ){}

    @Get()
    getUser(){
        return this.userService.getUser();
    }
}
