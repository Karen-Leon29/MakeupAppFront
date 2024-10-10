export type Users = {
    id: number
    name: string
    lastName: string
    email: string
    phone: string
    password: string
    address: string
    rol: string
}

export type UsersResponse =  Users[]


export type UsersRequest = {
    name: string,
    lastName: string,
    phone: string,
    address: string,
    email: string,
    confirmEmail: string,
    password: string,
    confirmPassword: string
}

export type LoginResponse = {
    data: Users | null
    token: string
}

export type LoginRequest = {
    email: string,
    password: string
}