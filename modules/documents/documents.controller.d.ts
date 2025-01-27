import { DocumentsService } from './documents.service';
import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
export declare class DocumentsController {
    private readonly documentsService;
    constructor(documentsService: DocumentsService);
    create(createDocumentDto: CreateDocumentDto, files: Array<Express.Multer.File>): Promise<import("mongoose").Document<unknown, {}, import("./schemas/document.schema").DocumentFiles> & import("./schemas/document.schema").DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("./schemas/document.schema").DocumentFiles> & import("./schemas/document.schema").DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, import("./schemas/document.schema").DocumentFiles> & import("./schemas/document.schema").DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./schemas/document.schema").DocumentFiles, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, import("./schemas/document.schema").DocumentFiles> & import("./schemas/document.schema").DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, import("./schemas/document.schema").DocumentFiles> & import("./schemas/document.schema").DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, import("./schemas/document.schema").DocumentFiles, "findOne", {}>;
    update(id: string, updateDocumentDto: UpdateDocumentDto, files: Array<Express.Multer.File>): Promise<import("mongoose").Document<unknown, {}, import("./schemas/document.schema").DocumentFiles> & import("./schemas/document.schema").DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/document.schema").DocumentFiles> & import("./schemas/document.schema").DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
