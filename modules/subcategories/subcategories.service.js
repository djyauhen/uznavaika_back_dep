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
exports.SubcategoriesService = void 0;
const common_1 = require("@nestjs/common");
const subcategories_repository_1 = require("./subcategories.repository");
let SubcategoriesService = class SubcategoriesService {
    constructor(subcategoriesRepository) {
        this.subcategoriesRepository = subcategoriesRepository;
    }
    create(createSubcategoryDto) {
        return this.subcategoriesRepository.create(createSubcategoryDto);
    }
    findAll() {
        return this.subcategoriesRepository.findAll();
    }
    findOne(id) {
        return this.subcategoriesRepository.findOne(id);
    }
    update(id, updateSubcategoryDto) {
        return this.subcategoriesRepository.update(id, updateSubcategoryDto);
    }
    remove(id) {
        return this.subcategoriesRepository.remove(id);
    }
};
exports.SubcategoriesService = SubcategoriesService;
exports.SubcategoriesService = SubcategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [subcategories_repository_1.SubcategoriesRepository])
], SubcategoriesService);
//# sourceMappingURL=subcategories.service.js.map