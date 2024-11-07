import { IsString, IsInt, IsNotEmpty, IsOptional} from 'class-validator';

export class userDto{
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

export class findUserDto{
    @IsOptional()
    @IsString()
    name: string;
}