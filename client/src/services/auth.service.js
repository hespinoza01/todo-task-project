import { encodeToken, decodeToken } from 'utils'

/**
 * Save the user token
 * @param {String} token
 * */
function setAuth(token) {
    let secureToken = encodeToken(token)
    localStorage.setItem('_tkn', secureToken)
}

/**
 * Return the user token value in header formatting
 * @return {Object}
 */
function getAuth() {
    if (!isAuth()) return {}

    let secureToken = localStorage.getItem('_tkn')
    let token = decodeToken(secureToken)

    return {
        'x-auth-token': token,
    }
}

/**
 * Return token string
 * @return {String}
 */
function getAuthToken() {
    if (!isAuth()) return null

    let secureToken = localStorage.getItem('_tkn')
    let token = decodeToken(secureToken)

    return token
}

/**
 * Check is user token exist
 * @return {Boolean}
 */
function isAuth() {
    return localStorage.getItem('_tkn') !== null
}

/**
 * Remove token credentials
 */
function removeAuth() {
    localStorage.removeItem('_tkn')
}

export { setAuth, getAuth, getAuthToken, removeAuth, isAuth }
