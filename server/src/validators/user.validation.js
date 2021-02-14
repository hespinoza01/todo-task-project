import Joi from '@hapi/joi'
import { ValidationErrorMessage } from '@/utils'

export default function UserValidator(body) {
    return new Promise((resolve, reject) => {
        // validations for user schema
        const schema = Joi.object({
            id: Joi.number().positive().messages({
                'number.base': 'Ingrese un ID de usuario válido',
                'number.positive':
                    'El ID de usuario no puede ser un número negativo',
            }),

            email: Joi.string().trim().max(100).email().exist().messages({
                'string.max':
                    'El correo ingresado supera el límite de 100 caracteres permitidos',
                'string.email': 'Ingrese un correo válido',
                'any.required': 'El correo es requerido',
            }),

            fullname: Joi.string().trim().min(4).max(255).exist().messages({
                'string.min': 'Ingrese un nombre con al menos 4 caracteres',
                'string.max':
                    'El nombre ingresado supera el límite de 255 caracteres',
                'any.required': 'El nombre del usuario es requerido',
            }),

            password: Joi.string().min(6).required().messages({
                'string.min':
                    'La contraseña debe ser igual o mayor de 6 caracteres',
                'any.required': 'La contraseña es requerida',
            }),
        })

        // check schema validation
        const { error, value } = schema.validate(body)

        if (error) {
            reject(ValidationErrorMessage(error))
        }

        resolve(value)
    })
}
