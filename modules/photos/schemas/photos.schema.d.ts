import { Document } from 'mongoose';
export declare class Photos extends Document {
    path: string;
    additionalData: string;
}
export declare const PhotosSchema: import("mongoose").Schema<Photos, import("mongoose").Model<Photos, any, any, any, Document<unknown, any, Photos> & Photos & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Photos, Document<unknown, {}, import("mongoose").FlatRecord<Photos>> & import("mongoose").FlatRecord<Photos> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
