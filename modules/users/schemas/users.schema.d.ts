import { Document } from 'mongoose';
export declare class Users extends Document {
    login: string;
    passwordHash: string;
    refreshToken: string | null;
}
export declare const UsersSchema: import("mongoose").Schema<Users, import("mongoose").Model<Users, any, any, any, Document<unknown, any, Users> & Users & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Users, Document<unknown, {}, import("mongoose").FlatRecord<Users>> & import("mongoose").FlatRecord<Users> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
