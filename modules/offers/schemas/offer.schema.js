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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferSchema = exports.Offer = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let Offer = class Offer extends mongoose_1.Document {
};
exports.Offer = Offer;
__decorate([
    (0, mongoose_2.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Offer.prototype, "title", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", Number)
], Offer.prototype, "newPrice", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: false }),
    __metadata("design:type", Number)
], Offer.prototype, "oldPrice", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Offer.prototype, "showOffer", void 0);
exports.Offer = Offer = __decorate([
    (0, mongoose_2.Schema)({ collection: 'offers' })
], Offer);
exports.OfferSchema = mongoose_2.SchemaFactory.createForClass(Offer);
//# sourceMappingURL=offer.schema.js.map