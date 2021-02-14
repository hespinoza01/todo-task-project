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

/**
 * Return a new object with ommiteds keys
 * @param {Object} objectData
 * @param  {String} toOmmit
 * @return {Object}
 */
export function ommitKey(objectData, ...toOmmit) {
    if (typeof objectData !== 'object') {
        return objectData
    }

    // create a object clon
    const result = { ...objectData }

    for (let key of toOmmit) {
        delete result[key]
    }

    return result
}
