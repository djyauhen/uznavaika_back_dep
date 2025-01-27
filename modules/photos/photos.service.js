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
exports.PhotosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const photos_schema_1 = require("./schemas/photos.schema");
const mongoose_2 = require("mongoose");
const path_1 = require("path");
const promises_1 = require("fs/promises");
let PhotosService = class PhotosService {
    constructor(photosModel) {
        this.photosModel = photosModel;
    }
    async saveFileData(filePath, additionalData) {
        const file = new this.photosModel({
            path: filePath,
            additionalData: additionalData,
        });
        return file.save();
    }
    async getAll() {
        return this.photosModel.find();
    }
    async getOne(id) {
        return this.photosModel.findById(id);
    }
    async delete(id) {
        const photo = await this.photosModel.findById(id).exec();
        if (!photo) {
            throw new Error('Фото не найдено');
        }
        const filePath = (0, path_1.join)(__dirname, '..', '..', '..', 'public', photo.path);
        try {
            await (0, promises_1.unlink)(filePath);
        }
        catch (error) {
            throw new Error(`Ошибка при удалении файла: ${error.message}`);
        }
        return this.photosModel.findByIdAndDelete(id);
    }
};
exports.PhotosService = PhotosService;
exports.PhotosService = PhotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(photos_schema_1.Photos.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], PhotosService);
//# sourceMappingURL=photos.service.js.map