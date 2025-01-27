import { UsersService } from './users.service';
import { CreateUsersDto } from './dto/create-users.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    registerUser(dto: CreateUsersDto): Promise<any>;
}
