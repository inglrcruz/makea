import { Category } from "./category.interface";

export interface Article {
    aid: number;
    name: string;
    categoryId: number;
    description: string;
    price: number;
    category?: Category;
    pictures?: any
}


