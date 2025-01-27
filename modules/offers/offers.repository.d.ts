import { Offer } from './schemas/offer.schema';
import { Model } from 'mongoose';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
export declare class OffersRepository {
    private readonly offerModel;
    constructor(offerModel: Model<Offer>);
    create(createOfferDto: CreateOfferDto): Promise<import("mongoose").Document<unknown, {}, Offer> & Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, Offer> & Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, Offer> & Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    update(id: string, updateOfferDto: UpdateOfferDto): Promise<import("mongoose").Document<unknown, {}, Offer> & Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, Offer> & Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
