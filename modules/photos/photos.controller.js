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
exports.PhotosController = void 0;
const common_1 = require("@nestjs/common");
const photos_service_1 = require("./photos.service");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const path_1 = require("path");
const platform_express_1 = require("@nestjs/platform-express");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
let PhotosController = class PhotosController {
    constructor(photosService) {
        this.photosService = photosService;
    }
    async uploadFile(file, additionalData) {
        const filePath = `uploads/photos/${file.filename}`;
        return await this.photosService.saveFileData(filePath, additionalData);
    }
    async getAll() {
        return this.photosService.getAll();
    }
    async getOne(id) {
        return this.photosService.getOne(id);
    }
    async deleteOne(id) {
        return this.photosService.delete(id);
    }
};
exports.PhotosController = PhotosController;
__decorate([
    (0, common_1.Post)(''),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: './public/uploads/photos',
            filename: (req, file, callback) => {
                const uniqueSuffix = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                callback(null, uniqueSuffix);
            },
        }),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __param(1, (0, common_1.Body)('additionalData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "getOne", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotosController.prototype, "deleteOne", null);
exports.PhotosController = PhotosController = __decorate([
    (0, common_1.Controller)('photos'),
    __metadata("design:paramtypes", [photos_service_1.PhotosService])
], PhotosController);
//# sourceMappingURL=photos.controller.js.map