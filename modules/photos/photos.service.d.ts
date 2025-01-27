import { Photos } from './schemas/photos.schema';
import { Model } from 'mongoose';
export declare class PhotosService {
    private photosModel;
    constructor(photosModel: Model<Photos>);
    saveFileData(filePath: string, additionalData: string): Promise<Photos>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, Photos> & Photos & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getOne(id: string): Promise<import("mongoose").Document<unknown, {}, Photos> & Photos & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    delete(id: string): Promise<import("mongoose").Document<unknown, {}, Photos> & Photos & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
