import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto{
    @ApiProperty({
        description: 'Email do Usuario',
        example: 'email@email.com'
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Nome do Usuario',
        example: 'Michael'
    })
    @IsString()
    name: string
}