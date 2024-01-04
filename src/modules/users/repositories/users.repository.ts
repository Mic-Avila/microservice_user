import { Injectable } from "@nestjs/common";
import { UpdateUserDto } from "../dtos/update-user.dto";
import { PrismaService } from "src/services/prisma.service";

@Injectable()
export class UsersRepository{

constructor(private prismaService: PrismaService){}

    async create(user: UpdateUserDto){
        const formatUser = {
            email: user.email,
            name: user.name,
        }
        const userCreated =  await this.prismaService.users.create({
            data: formatUser
        })
        return {
            name: userCreated.name,
            id: userCreated.id,
            email: userCreated.email
        }
    }

    async findAll(){
        return await this.prismaService.users.findMany()
    }

    async updateById(id: string, data: UpdateUserDto){
        const user = await this.prismaService.users.update({
            where:{
                id,
            },
            data
        })

        return user

    }

    async delete(id:string){
        return await this.prismaService.users.delete({where: {id}})
    }
}