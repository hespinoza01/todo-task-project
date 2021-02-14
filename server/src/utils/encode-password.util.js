import { SHA256 } from 'crypto-js'
import { vars } from '@/config'

/**
 * Create a encode hash for password
 * @param {String} password - password to encode
 * @return {String}
 */
export default function EncodePassword(password) {
    const encoded = SHA256(password, vars.PASSWORD_SECRET).toString()

    return encoded
}
