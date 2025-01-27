import { Teacher } from './schemas/teacher.schema';
import { Model } from 'mongoose';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { CreateTeacherPhotoDto } from './dto/create-teacher-photo.dto';
export declare class TeachersRepository {
    private teacherModel;
    constructor(teacherModel: Model<Teacher>);
    create(createTeacherPhotoDto: CreateTeacherPhotoDto): Promise<Teacher>;
    findAll(): Promise<Teacher[]>;
    find(id: string): Promise<Teacher>;
    update(id: string, updateTeacherDto: UpdateTeacherDto): Promise<Teacher>;
    remove(id: string): Promise<Teacher>;
    removePhoto(id: string): Promise<void>;
}
