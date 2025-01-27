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
exports.DocumentsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const document_schema_1 = require("./schemas/document.schema");
const promises_1 = require("fs/promises");
const path_1 = require("path");
let DocumentsService = class DocumentsService {
    constructor(documentFilesModel) {
        this.documentFilesModel = documentFilesModel;
    }
    create(createDocumentDto, pdfPath, coverPath) {
        const documentFiles = new this.documentFilesModel({
            title: createDocumentDto.title,
            documentHash: pdfPath,
            documentCover: coverPath,
        });
        return documentFiles.save();
    }
    findAll() {
        return this.documentFilesModel.find();
    }
    findOne(id) {
        return this.documentFilesModel.findById(id);
    }
    async update(id, updateDocumentDto, documentHash, documentCover) {
        const documentFile = await this.documentFilesModel.findById(id).exec();
        if (documentHash) {
            const filePath = (0, path_1.join)(__dirname, '..', '..', '..', 'public', documentFile.documentHash);
            await (0, promises_1.unlink)(filePath);
            updateDocumentDto['documentHash'] = documentHash;
        }
        if (documentCover) {
            const filePath = (0, path_1.join)(__dirname, '..', '..', '..', 'public', documentFile.documentCover);
            await (0, promises_1.unlink)(filePath);
            updateDocumentDto['documentCover'] = documentCover;
        }
        return this.documentFilesModel.findByIdAndUpdate(id, updateDocumentDto);
    }
    async remove(id) {
        const documentFile = await this.documentFilesModel.findById(id).exec();
        if (!documentFile) {
            throw new Error('Файл не найден');
        }
        const filePath = (0, path_1.join)(__dirname, '..', '..', '..', 'public', documentFile.documentHash);
        const coverPath = (0, path_1.join)(__dirname, '..', '..', '..', 'public', documentFile.documentCover);
        try {
            await (0, promises_1.unlink)(filePath);
            await (0, promises_1.unlink)(coverPath);
        }
        catch (error) {
            throw new Error(`Ошибка при удалении файла: ${error.message}`);
        }
        return this.documentFilesModel.findByIdAndDelete(id);
    }
};
exports.DocumentsService = DocumentsService;
exports.DocumentsService = DocumentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(document_schema_1.DocumentFiles.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], DocumentsService);
//# sourceMappingURL=documents.service.js.map