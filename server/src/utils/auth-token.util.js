import { sign, verify } from 'jsonwebtoken'
import { vars } from '@/config'

/**
 * Create a new auth token
 * @param {Object} payload
 * @return {String}
 */
export function CreateToken(payload) {
    return new Promise((resolve, reject) => {
        sign(payload, vars.JWT_SECRET, { expiresIn: 3600 }, (err, token) => {
            // check for errors
            if (err) {
                reject(err.message)
            }

            resolve(token)
        })
    })
}

/**
 * Decode a auth token
 * @param {String} token
 * @return {Object}
 */
export function DecodeToken(token) {
    return new Promise((resolve, reject) => {
        try {
            // if not token, raise error
            if (!token) {
                reject('Token es requerido')
            }

            verify(token, vars.JWT_SECRET, (err, decoded) => {
                // if error on verify, raise message
                if (err) {
                    throw err
                }

                resolve(decoded)
            })
        } catch (error) {
            console.log(`DecodeToken: ${error}`)
            reject('Error al decodificar el token')
        }
    })
}
