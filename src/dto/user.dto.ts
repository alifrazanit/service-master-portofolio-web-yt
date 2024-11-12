import { IsOptional, IsString, IsInt, IsNotEmpty } from 'class-validator';

export class findUserDto {
    @IsOptional()
    @IsString()
    name: string;
}

export class UserDto {
    @IsOptional()
    @IsInt()
    userId: number;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}