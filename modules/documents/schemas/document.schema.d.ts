import { Document } from 'mongoose';
export declare class DocumentFiles extends Document {
    title: string;
    documentHash: string;
    documentCover: string;
}
export declare const DocumentFilesSchema: import("mongoose").Schema<DocumentFiles, import("mongoose").Model<DocumentFiles, any, any, any, Document<unknown, any, DocumentFiles> & DocumentFiles & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, DocumentFiles, Document<unknown, {}, import("mongoose").FlatRecord<DocumentFiles>> & import("mongoose").FlatRecord<DocumentFiles> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
