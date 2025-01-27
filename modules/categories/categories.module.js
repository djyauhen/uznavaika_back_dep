"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesModule = void 0;
const common_1 = require("@nestjs/common");
const categories_service_1 = require("./categories.service");
const categories_controller_1 = require("./categories.controller");
const categories_repository_1 = require("./categories.repository");
const mongoose_1 = require("@nestjs/mongoose");
const category_schema_1 = require("./schemas/category.schema");
const jwt_strategy_1 = require("../../core/guards/jwt.strategy");
const subcategories_module_1 = require("../subcategories/subcategories.module");
let CategoriesModule = class CategoriesModule {
};
exports.CategoriesModule = CategoriesModule;
exports.CategoriesModule = CategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: category_schema_1.Category.name,
                    schema: category_schema_1.CategorySchema,
                },
            ]),
            (0, common_1.forwardRef)(() => subcategories_module_1.SubcategoriesModule),
        ],
        controllers: [categories_controller_1.CategoriesController],
        providers: [categories_service_1.CategoriesService, categories_repository_1.CategoriesRepository, jwt_strategy_1.JwtStrategy],
        exports: [categories_repository_1.CategoriesRepository, mongoose_1.MongooseModule],
    })
], CategoriesModule);
//# sourceMappingURL=categories.module.js.map