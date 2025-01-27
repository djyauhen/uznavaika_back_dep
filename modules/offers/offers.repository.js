"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OffersRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const offer_schema_1 = require("./schemas/offer.schema");
const mongoose_2 = require("mongoose");
let OffersRepository = class OffersRepository {
    constructor(offerModel) {
        this.offerModel = offerModel;
    }
    async create(createOfferDto) {
        return this.offerModel.create(createOfferDto);
    }
    async findOne(id) {
        return this.offerModel.findById(id);
    }
    async findAll() {
        return this.offerModel.find();
    }
    async update(id, updateOfferDto) {
        return this.offerModel.findByIdAndUpdate(id, updateOfferDto);
    }
    async remove(id) {
        return this.offerModel.findByIdAndDelete(id);
    }
};
exports.OffersRepository = OffersRepository;
exports.OffersRepository = OffersRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(offer_schema_1.Offer.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], OffersRepository);
//# sourceMappingURL=offers.repository.js.map