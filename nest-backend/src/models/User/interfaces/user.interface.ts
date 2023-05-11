import { Allow, IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDTO {
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(15)
    password: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(15)
    @Matches('password')
    confirmPassword: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    name: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(20)
    surname: string;

    @MinLength(15)
    @MaxLength(300)
    blogDescription: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Allow()
    logo: Buffer

    @Allow()
    background: Buffer

}