import { SubcategoriesService } from './subcategories.service';
import { CreateSubcategoryDto } from './dto/create-subcategory.dto';
import { UpdateSubcategoryDto } from './dto/update-subcategory.dto';
export declare class SubcategoriesController {
    private readonly subcategoriesService;
    constructor(subcategoriesService: SubcategoriesService);
    create(createSubcategoryDto: CreateSubcategoryDto): Promise<import("./schemas/subcategory.schema").Subcategory>;
    findAll(): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
    findOne(id: string): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
    update(id: string, updateSubcategoryDto: UpdateSubcategoryDto): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
    remove(id: string): Promise<import("./schemas/subcategory.schema").Subcategory[]>;
}
