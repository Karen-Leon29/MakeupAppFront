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

export interface ProductsRequest {
    nameProduct: string;
    description: string;
    price: number;
    amount: number;
    codeProduct: string;
    images: Images[];
    category: Category;
    presentation?: string;
    brand?: string;
    photoProduct?: string;
}

export interface Category {
    id: number;
    nameCategory?: string;
    descriptionCategory?: string;
}

export interface ProductsResponse {
    id: number;
    nameProduct: string;
    description: string;
    price: number;
    amount: number;
    codeProduct: string;
    images: Images[];
    category: Category;
    presentation?: string;
    brand?: string;
    photoProduct?: string;
}

export interface Images {
    id: number;
    imageUrl: string;
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

export const getProducts = async () => {
    const response = GET<ProductsResponse[]>('/api-product/listProduct')
    return response
}

export const postProduct = async (product: ProductsRequest) => {
    const response = POST<ProductsResponse>('/api-product/createProduct', product)
    return response
}

export const putProduct = async (editingProductId: number, product: ProductsRequest) => {
    const response = PUT<ProductsResponse>(`/api-product/updateProduct/${editingProductId}`, product)
    return response
}

export const deleteProduct = async (id: number) => {
    const response = DELETE<ProductsResponse>(`/api-product/deleteProduct/${id}`)
    return response
}

export const getProduct = async (id: number) => {
    const response = GET<ProductsResponse>(`/api-product/getProduct/${id}`)
    return response
}