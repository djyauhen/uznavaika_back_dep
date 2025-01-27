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
exports.DocumentsController = void 0;
const common_1 = require("@nestjs/common");
const documents_service_1 = require("./documents.service");
const create_document_dto_1 = require("./dto/create-document.dto");
const update_document_dto_1 = require("./dto/update-document.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const uuid_1 = require("uuid");
const jwt_auth_guard_1 = require("../../core/guards/jwt-auth.guard");
let DocumentsController = class DocumentsController {
    constructor(documentsService) {
        this.documentsService = documentsService;
    }
    create(createDocumentDto, files) {
        const pdf = files.find((file) => file.fieldname === 'file');
        const cover = files.find((file) => file.fieldname === 'cover');
        const pdfPath = `uploads/documents/${pdf.filename}`;
        const coverPath = `uploads/documents/${cover.filename}`;
        return this.documentsService.create(createDocumentDto, pdfPath, coverPath);
    }
    findAll() {
        return this.documentsService.findAll();
    }
    findOne(id) {
        return this.documentsService.findOne(id);
    }
    update(id, updateDocumentDto, files) {
        let documentHash;
        let documentCover;
        const pdf = files.find((file) => file.fieldname === 'file');
        const cover = files.find((file) => file.fieldname === 'cover');
        if (pdf) {
            documentHash = `uploads/documents/${pdf.filename}`;
        }
        if (cover) {
            documentCover = `uploads/documents/${cover.filename}`;
        }
        return this.documentsService.update(id, updateDocumentDto, documentHash, documentCover);
    }
    remove(id) {
        return this.documentsService.remove(id);
    }
};
exports.DocumentsController = DocumentsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: './public/uploads/documents',
            filename: (req, file, callback) => {
                const uniqueSuffix = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                callback(null, uniqueSuffix);
            },
        }),
        fileFilter: (req, file, callback) => {
            const allowedFields = ['file', 'cover'];
            if (allowedFields.includes(file.fieldname)) {
                return callback(null, true);
            }
            return callback(new Error('Invalid file field'), false);
        },
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_document_dto_1.CreateDocumentDto,
        Array]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.UseInterceptors)((0, platform_express_1.AnyFilesInterceptor)({
        storage: (0, multer_1.diskStorage)({
            destination: './public/uploads/documents',
            filename: (req, file, callback) => {
                const uniqueSuffix = `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`;
                callback(null, uniqueSuffix);
            },
        }),
        fileFilter: (req, file, callback) => {
            const allowedFields = ['file', 'cover'];
            if (allowedFields.includes(file.fieldname)) {
                return callback(null, true);
            }
            return callback(new Error('Invalid file field'), false);
        },
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_document_dto_1.UpdateDocumentDto,
        Array]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DocumentsController.prototype, "remove", null);
exports.DocumentsController = DocumentsController = __decorate([
    (0, common_1.Controller)('documents'),
    __metadata("design:paramtypes", [documents_service_1.DocumentsService])
], DocumentsController);
//# sourceMappingURL=documents.controller.js.map