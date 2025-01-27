"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubcategoriesModule = void 0;
const common_1 = require("@nestjs/common");
const subcategories_service_1 = require("./subcategories.service");
const subcategories_controller_1 = require("./subcategories.controller");
const mongoose_1 = require("@nestjs/mongoose");
const subcategory_schema_1 = require("./schemas/subcategory.schema");
const subcategories_repository_1 = require("./subcategories.repository");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
const categories_module_1 = require("../categories/categories.module");
let SubcategoriesModule = class SubcategoriesModule {
};
exports.SubcategoriesModule = SubcategoriesModule;
exports.SubcategoriesModule = SubcategoriesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: subcategory_schema_1.Subcategory.name,
                    schema: subcategory_schema_1.SubcategorySchema,
                },
            ]),
            (0, common_1.forwardRef)(() => categories_module_1.CategoriesModule),
        ],
        controllers: [subcategories_controller_1.SubcategoriesController],
        providers: [subcategories_service_1.SubcategoriesService, subcategories_repository_1.SubcategoriesRepository, jwt_auth_guard_1.JwtAuthGuard],
        exports: [subcategories_repository_1.SubcategoriesRepository, mongoose_1.MongooseModule],
    })
], SubcategoriesModule);
//# sourceMappingURL=subcategories.module.js.map