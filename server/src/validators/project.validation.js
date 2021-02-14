import Joi from '@hapi/joi'
import { ValidationErrorMessage } from '@/utils'

export default function ProjectValidation(body) {
    return new Promise((resolve, reject) => {
        const schema = Joi.object({
            id: Joi.number().positive().messages({
                'number.base': 'Ingrese un ID de proyecto válido',
                'number.positive':
                    'El ID de proyecto no puede ser un número negativo',
            }),

            name: Joi.string().trim().exist().messages({
                'any.required': 'El nombre del proyecto es requerido',
            }),

            description: Joi.string()
                .trim()
                .allow('', null)
                .empty(['', null])
                .default('Sin descripción')
                .max(255)
                .messages({
                    'string.max':
                        'La descripción del proyecto supera el límite de 255 caracteres',
                }),

            archived: Joi.number().positive().valid(0, 1).default(0),
        })

        // check schema validation
        const { error, value } = schema.validate(body)

        if (error) {
            reject(ValidationErrorMessage(error))
        }

        resolve(value)
    })
}
