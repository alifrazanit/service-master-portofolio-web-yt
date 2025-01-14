import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controllers/master/user/user.controller';
import { UserService } from './services/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntityModule } from './modules/entity/entity.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host:'localhost',
      port: 5432,
      username: 'portofolio_website_stag',
      password: '123456',
      database: 'portofolio_website_stag',
      autoLoadEntities: true,
      // synchronize: true,
      // dropSchema: true
    }),
    EntityModule
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
