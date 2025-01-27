import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
export declare class Subcategory extends Document {
    name: string;
    category_id: string;
    age: string;
    description: string;
    types_class: {
        class_name: string;
        amount: number;
    }[];
    subscription_amount?: number;
}
export declare const SubcategorySchema: mongoose.Schema<Subcategory, mongoose.Model<Subcategory, any, any, any, Document<unknown, any, Subcategory> & Subcategory & Required<{
    _id: unknown;
}> & {
    __v: number;
}, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Subcategory, Document<unknown, {}, mongoose.FlatRecord<Subcategory>> & mongoose.FlatRecord<Subcategory> & Required<{
    _id: unknown;
}> & {
    __v: number;
}>;
