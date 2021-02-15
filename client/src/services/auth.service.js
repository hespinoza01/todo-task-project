import { encodeToken, decodeToken } from 'utils'

/**
 * Save the user token
 * @param {String} token
 * */
export function setAuth(token) {
    let secureToken = encodeToken(token)
    localStorage.setItem('_tkn', secureToken)
}

/**
 * Return the user token value in header formatting
 * @return {Object}
 */
export function getAuth() {
    if (!isAuth()) return {}

    let secureToken = localStorage.getItem('_tkn')
    let token = decodeToken(secureToken)

    return {
        Authorization: token,
    }
}

/**
 * Check is user token exist
 * @return {Boolean}
 */
export function isAuth() {
    return localStorage.getItem('_tkn') !== null
}

/**
 * Remove token credentials
 */
export function removeAuth() {
    localStorage.removeItem('_tkn')
}
