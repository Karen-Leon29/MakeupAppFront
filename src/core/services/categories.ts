import { GET } from "./requests"


export interface CategoriesResponse {
    id: number;
    nameCategory: string;
    descriptionCategory: string;
}

export const getCategories = async () => {
    const response = GET<CategoriesResponse[]>('/api-category/listCategory')
    return response
}