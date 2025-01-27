import { OffersService } from './offers.service';
import { CreateOfferDto } from './dto/create-offer.dto';
import { UpdateOfferDto } from './dto/update-offer.dto';
export declare class OffersController {
    private readonly offersService;
    constructor(offersService: OffersService);
    create(createOfferDto: CreateOfferDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/offer.schema").Offer> & import("./schemas/offer.schema").Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    findAll(): Promise<(import("mongoose").Document<unknown, {}, import("./schemas/offer.schema").Offer> & import("./schemas/offer.schema").Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    })[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/offer.schema").Offer> & import("./schemas/offer.schema").Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    update(id: string, updateOfferDto: UpdateOfferDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/offer.schema").Offer> & import("./schemas/offer.schema").Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("./schemas/offer.schema").Offer> & import("./schemas/offer.schema").Offer & Required<{
        _id: unknown;
    }> & {
        __v: number;
    }>;
}
