import CryptoJS from 'crypto-js'

// Encode/Decode salt
const key = 'e8f0cd0cceab438eb287d9a4b1b4596a'

/**
 * Encode token by salt secret key
 * @param {String} text - text to encode
 * @return {String}
 * */
function encodeToken(text) {
    return CryptoJS.AES.encrypt(text, key).toString()
}

/**
 * Decode a encode token by salt secret key
 * @param {String} text - text to decode
 * @return {String}
 * */
function decodeToken(text) {
    return CryptoJS.AES.decrypt(text, key).toString(CryptoJS.enc.Utf8)
}

export { encodeToken, decodeToken }
