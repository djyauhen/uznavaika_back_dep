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
exports.SubcategorySchema = exports.Subcategory = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
let Subcategory = class Subcategory extends mongoose_1.Document {
};
exports.Subcategory = Subcategory;
__decorate([
    (0, mongoose_2.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Subcategory.prototype, "name", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    }),
    __metadata("design:type", String)
], Subcategory.prototype, "category_id", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Subcategory.prototype, "age", void 0);
__decorate([
    (0, mongoose_2.Prop)({ required: true }),
    __metadata("design:type", String)
], Subcategory.prototype, "description", void 0);
__decorate([
    (0, mongoose_2.Prop)({
        type: [
            {
                class_name: { type: String, required: true },
                amount: { type: Number, required: true },
            },
        ],
        required: true,
    }),
    __metadata("design:type", Array)
], Subcategory.prototype, "types_class", void 0);
__decorate([
    (0, mongoose_2.Prop)({ default: null }),
    __metadata("design:type", Number)
], Subcategory.prototype, "subscription_amount", void 0);
exports.Subcategory = Subcategory = __decorate([
    (0, mongoose_2.Schema)({ collection: 'subcategory' })
], Subcategory);
exports.SubcategorySchema = mongoose_2.SchemaFactory.createForClass(Subcategory);
//# sourceMappingURL=subcategory.schema.js.map