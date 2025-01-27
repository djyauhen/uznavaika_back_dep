import { Model } from 'mongoose';
import { Users } from './schemas/users.schema';
export declare class UsersRepository {
    private userModel;
    constructor(userModel: Model<Users>);
    create(user: Users): Promise<Users>;
    findByLogin(login: string): Promise<import("mongoose").Document<unknown, {}, Users> & Users & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findById(id: string): Promise<import("mongoose").Document<unknown, {}, Users> & Users & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    updateUser(userId: string, refreshToken: string | null): Promise<import("mongoose").Document<unknown, {}, Users> & Users & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
