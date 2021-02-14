/**
 * Check if values is a js literal object
 * @param {Object} value
 * @return {Boolean}
 */
export function isObject(value) {
    if (!value || Object.prototype.toString.call(value) !== '[object Object]') {
        return false
    }

    return true
}
