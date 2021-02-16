/**
 * Return a new object with ommiteds keys
 * @param {Object} objectData
 * @param  {String} toOmmit
 * @return {Object}
 */
export default function ommitObjectKey(objectData, ...toOmmit) {
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
