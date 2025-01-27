import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { CategoriesRepository } from './categories.repository';
import { Category } from './schemas/category.schema';
import { Model } from 'mongoose';
export declare class CategoriesService {
    private readonly categoryRepository;
    private categoryModel;
    constructor(categoryRepository: CategoriesRepository, categoryModel: Model<Category>);
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
    update(id: string, updateCategoryDto: UpdateCategoryDto): Promise<Category>;
    remove(id: string): Promise<Category>;
}
