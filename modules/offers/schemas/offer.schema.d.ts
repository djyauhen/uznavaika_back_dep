import { Document } from 'mongoose';
export declare class Offer extends Document {
    title: string;
    newPrice: number;
    oldPrice?: number;
    showOffer?: boolean;
}
export declare const OfferSchema: import("mongoose").Schema<Offer, import("mongoose").Model<Offer, any, any, any, Document<unknown, any, Offer> & Offer & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Offer, Document<unknown, {}, import("mongoose").FlatRecord<Offer>> & import("mongoose").FlatRecord<Offer> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
