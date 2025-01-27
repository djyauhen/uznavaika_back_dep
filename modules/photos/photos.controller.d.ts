import { PhotosService } from './photos.service';
export declare class PhotosController {
    private readonly photosService;
    constructor(photosService: PhotosService);
    uploadFile(file: Express.Multer.File, additionalData: string): Promise<import("./schemas/photos.schema").Photos>;
    getAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/photos.schema").Photos> & import("./schemas/photos.schema").Photos & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    getOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/photos.schema").Photos> & import("./schemas/photos.schema").Photos & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    deleteOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/photos.schema").Photos> & import("./schemas/photos.schema").Photos & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
