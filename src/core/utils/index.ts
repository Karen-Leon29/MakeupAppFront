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