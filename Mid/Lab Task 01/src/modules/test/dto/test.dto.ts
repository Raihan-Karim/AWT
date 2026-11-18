import { IsString, IsNotEmpty, IsEmail, Matches, IsOptional, IsDate } from 'class-validator';

export class CreateTestDto {
    @IsString()
    @IsNotEmpty({message: "Name cannot be empty"})
    name!:string;

    @IsEmail()
    @IsNotEmpty()
    email!:string;

    @IsString()
    @IsNotEmpty()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {message: "Password is incorrect"})
    password!:string;

    @IsOptional()
    @IsDate()
    createdAt?: Date = new Date();

    @IsOptional()
    @IsDate()
    updatedAt?: Date = new Date();
}

export class UpdateTestDto {
    @IsString()
    @IsNotEmpty({message: "Name cannot be empty"})
    name!:string;

    @IsEmail()
    @IsNotEmpty()
    email!:string;

    @IsString()
    @IsNotEmpty()password!:string;

    @IsOptional()
    @IsDate()
    createdAt?: Date = new Date();

    @IsOptional()
    @IsDate()
    updatedAt?: Date = new Date();
}