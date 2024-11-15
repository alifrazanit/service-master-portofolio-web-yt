import { Module } from '@nestjs/common';
import { UserController } from '../controllers/master/user/user.controller';
import { UserService } from '../services/user/user.service';
import { userRepository } from '../repositories/user.repository';
import { EntitiesModule } from './entities.module';


@Module({
    imports:[
        EntitiesModule
    ],
    controllers: [
        UserController
    ],
    providers: [
        UserService,
        userRepository
    ],
    exports:[
        UserService,
        userRepository
    ]
})
export class SharedModule { }
