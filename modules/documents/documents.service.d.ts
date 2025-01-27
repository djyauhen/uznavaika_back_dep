import { CreateDocumentDto } from './dto/create-document.dto';
import { UpdateDocumentDto } from './dto/update-document.dto';
import { Model } from 'mongoose';
import { DocumentFiles } from './schemas/document.schema';
export declare class DocumentsService {
    private documentFilesModel;
    constructor(documentFilesModel: Model<DocumentFiles>);
    create(createDocumentDto: CreateDocumentDto, pdfPath: string, coverPath: string): Promise<import("mongoose").Document<unknown, {}, DocumentFiles> & DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, {}, DocumentFiles> & DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[], import("mongoose").Document<unknown, {}, DocumentFiles> & DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, DocumentFiles, "find", {}>;
    findOne(id: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, DocumentFiles> & DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, import("mongoose").Document<unknown, {}, DocumentFiles> & DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }, {}, DocumentFiles, "findOne", {}>;
    update(id: string, updateDocumentDto: UpdateDocumentDto, documentHash?: string, documentCover?: string): Promise<import("mongoose").Document<unknown, {}, DocumentFiles> & DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, DocumentFiles> & DocumentFiles & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
