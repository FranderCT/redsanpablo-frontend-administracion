import { z } from 'zod'

export const LoginSchemas = z.object({
    Email: z.string()
    .nonempty('El correo es obligatorio.')
    .email('Debe ser un correo electrónico válido.')
    .max(254, 'El correo es demasiado largo'),
    
    Password: z.string()
    .nonempty('La contraseña es obligatoria.')
    .max(64, 'Máximo 64 caracteres')
})

export const ResetPsswrdSchemas = z.object({
    NewPassword: z.string()
    .nonempty('La contraseña es obligatoria.')
    .max(64, 'Máximo 64 caracteres'),

    ConfirmPassword: z.string()
    .nonempty('La contraseña es obligatoria.')
    .max(64, 'Máximo 64 caracteres')
})

export const ForgorPsswrdSchemas = z.object({
    IDcard: z.string()
    .nonempty('El Número de Cédula es Obligatorio')
    .max(12, 'Número de Cédula Demsiado Largo'),

    Email: z.string()
    .nonempty('El correo es obligatorio.')
    .email('Debe ser un correo electrónico válido.')
    .max(254, 'El correo es demasiado largo'),
})

