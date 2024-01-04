import { UpdateUserDto } from './dtos/update-user.dto';
import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dtos/create-user.dto";
import { ApiTags } from '@nestjs/swagger';
import { ApiDocGenericPost } from 'src/app/common/api-doc-post-generic.decorator';


@ApiTags('crud usuarios')
@Controller('users')
export class UsersController{
    constructor(private readonly userService:UsersService){}

    @Get()
    async findAll(){
    return await this.userService.findAll()
    }
    
    @Post()
    @ApiDocGenericPost('user-create', CreateUserDto)
    async create(@Body() user: CreateUserDto){
        return await this.userService.create(user)
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() body: UpdateUserDto){
        return await this.userService.update(id, body);
    }

    @Delete(':id')
    async delete(@Param('id') id:string ){
        await this.userService.delete(id)
    }
}

