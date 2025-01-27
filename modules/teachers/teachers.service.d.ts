import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { TeachersRepository } from './teachers.repository';
import { CreateTeacherPhotoDto } from './dto/create-teacher-photo.dto';
export declare class TeachersService {
    private readonly teacherRepository;
    constructor(teacherRepository: TeachersRepository);
    create(createTeacherPhotoDto: CreateTeacherPhotoDto): Promise<import("./schemas/teacher.schema").Teacher>;
    findAll(): Promise<import("./schemas/teacher.schema").Teacher[]>;
    findOne(id: string): Promise<import("./schemas/teacher.schema").Teacher>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<import("./schemas/teacher.schema").Teacher>;
    remove(id: string): Promise<import("./schemas/teacher.schema").Teacher>;
}
