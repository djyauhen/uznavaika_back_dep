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
exports.SubcategoriesRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const subcategory_schema_1 = require("./schemas/subcategory.schema");
const category_schema_1 = require("../categories/schemas/category.schema");
let SubcategoriesRepository = class SubcategoriesRepository {
    constructor(subcategoryModel, categoryModel) {
        this.subcategoryModel = subcategoryModel;
        this.categoryModel = categoryModel;
    }
    async create(subcategory) {
        const categoryExists = await this.categoryModel.findById(subcategory.category_id);
        if (!categoryExists) {
            throw new Error('Category does not exist');
        }
        return this.subcategoryModel.create(subcategory);
    }
    async findAll() {
        return this.subcategoryModel.find();
    }
    async findOne(id) {
        return this.subcategoryModel.findById(id);
    }
    async update(id, updateSubcategoryDto) {
        return this.subcategoryModel.findOneAndUpdate({ _id: id }, updateSubcategoryDto);
    }
    async remove(id) {
        return this.subcategoryModel.findOneAndDelete({ _id: id });
    }
};
exports.SubcategoriesRepository = SubcategoriesRepository;
exports.SubcategoriesRepository = SubcategoriesRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(subcategory_schema_1.Subcategory.name)),
    __param(1, (0, mongoose_1.InjectModel)(category_schema_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], SubcategoriesRepository);
//# sourceMappingURL=subcategories.repository.js.map