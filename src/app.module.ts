import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EntitiesModule } from './modules/entities.module';
import { SharedModule } from './modules/shared.module';

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
      synchronize: true
    }),
    EntitiesModule,
    SharedModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
