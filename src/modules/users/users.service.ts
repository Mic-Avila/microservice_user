import { User } from './interface/users.interface';
import { Injectable } from "@nestjs/common";
import { UsersRepository } from "./repositories/users.repository";
import { UpdateUserDto } from './dtos/update-user.dto';
import { PubSubService } from '../global/pubsub/pubsub.service';

@Injectable()
export class UsersService{

    constructor(
        private repository: UsersRepository,
        private pubsubService: PubSubService){}

    async findAll(){
        return await this.repository.findAll()
    }

    async create(user: User){
        const userCreated = await this.repository.create(user)
        await this.pubsubService.publish('user-created', userCreated, 'users')
    }

    async update(id: string, data: UpdateUserDto){
        return await this.repository.updateById(id, data)
    }

    async delete(id: string){
         return await this.repository.delete(id)
    }

}


