export type Users = {
    id: number
    name: string
    lastname: string
    email: string
    phone: string
    password: string
    address: string
    rol: string
}

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