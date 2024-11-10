import { IsOptional, IsString } from 'class-validator';

export class findUserDto{
    @IsOptional()
    @IsString()
    name: string;
}