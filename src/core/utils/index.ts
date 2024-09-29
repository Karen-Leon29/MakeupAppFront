export const withoutSpacingRepeat = (value: string) => {
    if (value.startsWith(' ')) return value.trim()
    return value.replace(/ +/g, ' ')
}

export const withoutSpacing = (value: string) => {
    return value.replace(/ +/g, '')
}

export const validateMinLength = (value: string, min: number = 0) => {
    const cleanedValue = withoutSpacing(value)
    return cleanedValue.length >= min
}

export const onlyPath = (path: string) => {
    const pathArray = path.split('/')
    const lastPath = pathArray[pathArray.length - 1]
    return lastPath === '' ? path : `/${lastPath}`
}

export const getUserRole = () => {
    const token = localStorage.getItem('token')
    if (token) {
        const [, payloadBase64] = token.split('.')
        const payload = JSON.parse(atob(payloadBase64))
        return payload.role
    }
    return null
}

export const getToken = (): string | null => {
    try {
        const token = localStorage.getItem('token')
        if (!token) return null
        const isExpired = checkISExpiredToken(token)
        if (isExpired) {
            localStorage.removeItem('token')
            return null
        }
        return token
    } catch (e) {
        return null
    }
}

export const getID = (): string | null => {
    try {
        const token = localStorage.getItem('token')
        if (!token) return null
        const [, payloadBase64] = token.split('.')
        const payload = JSON.parse(atob(payloadBase64))
        return payload.id
    } catch (e) {
        return null
    }
}

export const setToken = (token: string): void => {
    localStorage.setItem('token', token)
}

export const removeToken = (): void => {
    localStorage.removeItem('token')
}

export const mapSelectResponse = (
    data: { keyword: string | null; name: string; id: string }[],
    labels: Record<string, string>,
) => {
    return data.map((item) => {
        const label = item.keyword ? labels[item.keyword] : item.name
        return { label, value: item.id }
    })
}

export const generateQueryParams = (data: {
    [key: string]: string | (string | undefined)[] | number
}) => {
    const withoutEmptyValues = Object.keys(data).filter((key) => data[key] && data[key] !== '')
    return withoutEmptyValues
        .map((key) => {
            const value = data[key]
            if (Array.isArray(value)) return key + '=' + value.join(',')
            return key + '=' + value
        })
        .join('&')
}

export const capitalizeFirstLetter = (text: string) => {
    if (text == null) return ''
    return text.charAt(0).toUpperCase() + text.slice(1)
}

export const capitalizeEachWord = (text: string) => {
    if (text == null) return ''
    const words = text.split(' ')
    const capitalizedWords = words.map((word) => capitalizeFirstLetter(word))
    return capitalizedWords.join(' ')
}

export const validateNoWitheSpaces = (e: React.ChangeEvent<HTMLInputElement>) =>
    (e.target.value = e.target.value.replace(' ', ''))

export const validateOnlyNumbers = (e: React.ChangeEvent<HTMLInputElement>) =>
    (e.target.value = e.target.value.replace(/\D/g, ''))

export const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export const checkISExpiredToken = (token: string) => {
    const decoded = JSON.parse(atob(token.split('.')[1]))
    const currentTime = Date.now() / 1000
    return decoded.exp < currentTime
}

export const objInLowerCase = <T extends Record<string, unknown>>(obj: T): T => {
    let newObj = {} as T
    Object.entries(obj).forEach(([key, value]) => {
        if (typeof value === 'string') newObj = { ...newObj, [key]: value.toLowerCase() }
        else newObj = { ...newObj, [key]: value }
    })
    return newObj
}

export const onlyLetters = (e: React.ChangeEvent<HTMLInputElement>) =>
    (e.target.value = e.target.value.replace(/[^a-zA-ZñÑáéíóúÁÉÍÓÚ\s]/g, '').replace(/^\s/, ''))

export const validateBirthdate = (date: string) => {
    const today = new Date()
    const birthdate = new Date(date)
    const age = today.getFullYear() - birthdate.getFullYear()

    const month = today.getMonth() - birthdate.getMonth()
    if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
        return age - 1
    }
    return age
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const findOption = (options: any[], value: string) => {
    return options.find((option) => option.value === value) || null
}
