import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { RolesService } from 'src/roles/roles.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.model';

@Injectable()
export class UsersService {

    constructor(@InjectModel(User) private user: typeof User, private roleService: RolesService){}

    async createUser(dto: CreateUserDto){
        const user = await this.user.create(dto);
        const role = await this.roleService.getRoleByValue("user");
        await user.$set('roles', [role.id]);
        return user;
    }

    async getAllUsers(){
        const users = await this.user.findAll( {include: {all: true}});
        return users;
    }
}
