import { Users } from "core/types/requests"
import { GET, POST } from "./requests"


export const getUsers = async () => {
    const response = GET<Users[]>('/users')
    return response
}

export const getUserById = async (id: string) => {
    const response = GET<Users>(`/api-user/getUser/${id}`)
    return response
}

export const createUser = async (data: Users) => {
    const response = POST<Users>('/users', data)
    return response
}