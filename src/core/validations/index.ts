import { useLittera } from '@assembless/react-littera'
import { ValidationsStrings } from 'core/strings/validationsStrings'
import { z } from 'zod'

export const useValidations = () => {
    const translations = useLittera(ValidationsStrings.validations)

    const genericValidations = {
        email: z
            .string()
            .min(1, { message: translations.emailRequired })
            .email({ message: translations.emailInvalid }),
        password: z
            .string()
            .min(8, { message: translations.passwordMinLength })
            .max(128, { message: translations.passwordMaxLength })
            .refine(value => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/.test(value), {
                message: translations.passwordInvalid
            }),
        confirmPassword: z
            .string()
            .min(1, { message: translations.confirmPasswordRequired })
        ,
        username: z
            .string()
            .min(1, { message: translations.usernameRequired })
            .max(30, { message: translations.usernameMaxLength })
            .refine(value => !/\s/.test(value), { message: translations.usernameNoSpaces }),
        firstName: z
            .string()
            .min(1, { message: translations.firstNameRequired })
            .max(50, { message: translations.firstNameMaxLength }),
        lastName: z
            .string()
            .min(1, { message: translations.lastNameRequired })
            .max(50, { message: translations.lastNameMaxLength }),
        phoneNumber: z
            .string()
            .optional()
            .refine(value => !value || /^[+]?[0-9\s-]{7,15}$/.test(value), {
                message: translations.phoneNumberInvalid
            }),
        address: z
            .string()
            .optional()
            .refine(value => !value || /^[a-zA-Z0-9\s,.-]{5,}$/.test(value), {
                message: translations.addressInvalid
            }),
        dateOfBirth: z
            .string()
            .optional()
            .refine(value => !value || !isNaN(Date.parse(value)), {
                message: translations.dateOfBirthInvalid
            }),
    }

    return genericValidations
}
