"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateTeacherDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_teacher_photo_dto_1 = require("./create-teacher-photo.dto");
class UpdateTeacherDto extends (0, mapped_types_1.PartialType)(create_teacher_photo_dto_1.CreateTeacherPhotoDto) {
}
exports.UpdateTeacherDto = UpdateTeacherDto;
//# sourceMappingURL=update-teacher.dto.js.map