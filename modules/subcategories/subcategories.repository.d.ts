import { Model } from 'mongoose';
import { Subcategory } from './schemas/subcategory.schema';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { Category } from '../categories/schemas/category.schema';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
export declare class SubcategoriesRepository {
    private subcategoryModel;
    private categoryModel;
    constructor(subcategoryModel: Model<Subcategory>, categoryModel: Model<Category>);
    create(subcategory: CreateSubcategoryDto): Promise<Subcategory>;
    findAll(): Promise<Subcategory[]>;
    findOne(id: string): Promise<Subcategory[]>;
    update(id: string, updateSubcategoryDto: UpdateSubcategoryDto): Promise<Subcategory[]>;
    remove(id: string): Promise<Subcategory[]>;
}
