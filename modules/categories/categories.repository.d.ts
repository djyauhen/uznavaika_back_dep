import { Model } from 'mongoose';
import { Category } from './schemas/category.schema';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Subcategory } from '../subcategories/schemas/subcategory.schema';
export declare class CategoriesRepository {
    private categoryModel;
    private subcategoryModel;
    constructor(categoryModel: Model<Category>, subcategoryModel: Model<Subcategory>);
    create(category: Category): Promise<Category>;
    update(id: string, category: UpdateCategoryDto): Promise<Category>;
    delete(id: string): Promise<Category>;
    findAll(): Promise<Category[]>;
    findOne(id: string): Promise<Category>;
}
