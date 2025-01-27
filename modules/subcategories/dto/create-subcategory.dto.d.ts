declare class TypeClassDto {
    class_name: string;
    amount: number;
}
export declare class CreateSubcategoryDto {
    name: string;
    category_id: string;
    age: string;
    description: string;
    types_class: TypeClassDto[];
    subscription_amount?: number;
}
export {};
