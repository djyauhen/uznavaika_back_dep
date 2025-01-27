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
exports.TeachersService = void 0;
const common_1 = require("@nestjs/common");
const teachers_repository_1 = require("./teachers.repository");
let TeachersService = class TeachersService {
    constructor(teacherRepository) {
        this.teacherRepository = teacherRepository;
    }
    create(createTeacherPhotoDto) {
        return this.teacherRepository.create(createTeacherPhotoDto);
    }
    findAll() {
        return this.teacherRepository.findAll();
    }
    findOne(id) {
        return this.teacherRepository.find(id);
    }
    update(id, updateTeacherDto) {
        return this.teacherRepository.update(id, updateTeacherDto);
    }
    remove(id) {
        return this.teacherRepository.remove(id);
    }
};
exports.TeachersService = TeachersService;
exports.TeachersService = TeachersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [teachers_repository_1.TeachersRepository])
], TeachersService);
//# sourceMappingURL=teachers.service.js.map