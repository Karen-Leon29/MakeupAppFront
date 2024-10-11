import { GET, POST, PUT, DELETE } from "./requests"


export interface CategoriesResponse {
    id: number;
    nameCategory: string;
    descriptionCategory: string;
}

export interface CategoryRequest {
    nameCategory: string;
    descriptionCategory: string;
}

export const getCategories = async () => {
    const response = GET<CategoriesResponse[]>('/api-category/listCategory')
    return response
}

export const postCategory = async (category: CategoryRequest) => {
    const response = POST<CategoriesResponse>('/api-category/createCategory', category)
    return response
}

export const putCategory = async (editingCategoryId: number, category: CategoryRequest) => {
    const response = PUT<CategoriesResponse>('/api-category/updateCategory/' + editingCategoryId, category)
    return response
}

export const deleteCategory = async (id: number) => {
    const response = DELETE<CategoriesResponse>(`/api-category/deleteCategory/${id}`)
    return response
}
