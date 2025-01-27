import { Users } from './schemas/users.schema';
import { UsersRepository } from './users.repository';
import { CreateUsersDto } from './dto/create-users.dto';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly usersRepository;
    private userModel;
    constructor(usersRepository: UsersRepository, userModel: Model<Users>);
    registerUser(dto: CreateUsersDto): Promise<any>;
}
