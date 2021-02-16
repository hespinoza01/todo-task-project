import Joi from '@hapi/joi'
import { ValidationErrorMessage } from '@/utils'

export default function TaskValidation(body) {
    return new Promise((resolve, reject) => {
        const schema = Joi.object({
            id: Joi.number().positive().messages({
                'number.base': 'Ingrese un ID de tarea válido',
                'number.positive':
                    'El ID de tarea no puede ser un número negativo',
            }),

            title: Joi.string().trim().min(4).max(255).exist().messages({
                'string.min':
                    'El título de la tarea debe contener al menos 4 caracteres',
                'string.max':
                    'El título de la tarea supera el límite de 255 caracteres',
                'any.required': 'El título de la tarea es requerido',
            }),

            description: Joi.string()
                .trim()
                .allow('', null)
                .empty(['', null])
                .default('Sin descripción')
                .max(255)
                .messages({
                    'string.max':
                        'La descripción de la tarea supera el límite de 255 caracteres',
                }),

            status: Joi.number()
                .allow('', null)
                .empty(['', null])
                .default(1)
                .positive()
                .messages({
                    'number.base': 'Ingrese estado de tarea válido',
                    'number.positive': 'Ingrese estado de tarea válido',
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
