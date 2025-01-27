import { LoginRequest, LoginResponse, Users, UsersRequest, UsersResponse } from "core/types/requests"
import { GET, POST } from "./requests"


export const getUsers = async () => {
    const response = GET<UsersResponse>('/api-user/listUser')
    return response
}

export const getUserById = async (id: string) => {
    const response = GET<Users>(`/api-user/getUser/${id}`)
    return response
}

export const createUser = async (data: UsersRequest) => {
    const response = POST<Users, UsersRequest>('/api-user/registerUser', data)
    return response
}

export const login = async(body: {email: string, password: string}) => {
    const response = POST<LoginResponse, LoginRequest>('/api-user/login', body)
    return response
}