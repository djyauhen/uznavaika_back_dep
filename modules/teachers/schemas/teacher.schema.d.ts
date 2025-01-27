import { Document } from 'mongoose';
export declare class Teacher extends Document {
    full_name: string;
    post: string;
    study: string;
    path: string;
}
export declare const TeacherSchema: import("mongoose").Schema<Teacher, import("mongoose").Model<Teacher, any, any, any, Document<unknown, any, Teacher> & Teacher & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Teacher, Document<unknown, {}, import("mongoose").FlatRecord<Teacher>> & import("mongoose").FlatRecord<Teacher> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
