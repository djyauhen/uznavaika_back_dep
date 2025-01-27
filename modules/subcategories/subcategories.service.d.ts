import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
import { SubcategoriesRepository } from './subcategories.repository';
export declare class SubcategoriesService {
    private readonly subcategoriesRepository;
    constructor(subcategoriesRepository: SubcategoriesRepository);
    create(createSubcategoryDto: CreateSubcategoryDto): Promise<import("./schemas/subcategory.schema").Subcategory>;
    findAll(): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
    findOne(id: string): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
    update(id: string, updateSubcategoryDto: UpdateSubcategoryDto): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
    remove(id: string): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
}
