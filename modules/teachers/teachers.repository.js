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
exports.TeachersRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const teacher_schema_1 = require("./schemas/teacher.schema");
const mongoose_2 = require("mongoose");
const path_1 = require("path");
const promises_1 = require("fs/promises");
let TeachersRepository = class TeachersRepository {
    constructor(teacherModel) {
        this.teacherModel = teacherModel;
    }
    async create(createTeacherPhotoDto) {
        return this.teacherModel.create(createTeacherPhotoDto);
    }
    async findAll() {
        return this.teacherModel.find();
    }
    async find(id) {
        return this.teacherModel.findById(id);
    }
    async update(id, updateTeacherDto) {
        await this.removePhoto(id);
        return this.teacherModel.findByIdAndUpdate(id, updateTeacherDto);
    }
    async remove(id) {
        await this.removePhoto(id);
        return this.teacherModel.findByIdAndDelete(id);
    }
    async removePhoto(id) {
        const teacher = await this.teacherModel.findById(id).exec();
        if (!teacher) {
            throw new Error('Наставник не найден');
        }
        if (teacher.path) {
            const filePath = (0, path_1.join)(__dirname, '..', '..', '..', 'public', teacher.path);
            try {
                await (0, promises_1.unlink)(filePath);
            }
            catch (e) {
                return;
            }
        }
    }
};
exports.TeachersRepository = TeachersRepository;
exports.TeachersRepository = TeachersRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(teacher_schema_1.Teacher.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], TeachersRepository);
//# sourceMappingURL=teachers.repository.js.map