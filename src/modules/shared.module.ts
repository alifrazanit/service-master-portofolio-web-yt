import { Module } from '@nestjs/common';
import { UserController } from 'src/controllers/master/user/user.controller';
import { UserService } from 'src/services/user/user.service';
import { EntitiesModule } from './entities.module';

@Module({
    imports: [
        EntitiesModule
    ],
    controllers:[
        UserController
    ],
    providers: [
        UserService
    ]
})
export class SharedModule {}
