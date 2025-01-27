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
exports.OffersService = void 0;
const common_1 = require("@nestjs/common");
const offers_repository_1 = require("./offers.repository");
let OffersService = class OffersService {
    constructor(offersRepository) {
        this.offersRepository = offersRepository;
    }
    create(createOfferDto) {
        return this.offersRepository.create(createOfferDto);
    }
    findAll() {
        return this.offersRepository.findAll();
    }
    findOne(id) {
        return this.offersRepository.findOne(id);
    }
    update(id, updateOfferDto) {
        return this.offersRepository.update(id, updateOfferDto);
    }
    remove(id) {
        return this.offersRepository.remove(id);
    }
};
exports.OffersService = OffersService;
exports.OffersService = OffersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [offers_repository_1.OffersRepository])
], OffersService);
//# sourceMappingURL=offers.service.js.map