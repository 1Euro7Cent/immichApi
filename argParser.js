const Time = require("./objects/Time")

/**
 * the the given arg is the first set the path to ?argName=argValue
 * else add &argName=argValue to the path
 * @param {string} path url path
 * @param {string | undefined | boolean | Time | number} argValue arg to add to path
 * @param {string} argName arg name to add to path
 */
module.exports = function (path, argValue, argName) {
    if (argValue === undefined) return path
    if (argValue instanceof Time) argValue = argValue.time.toISOString()
    if (typeof argValue === 'boolean') argValue = argValue.toString()
    if (typeof argValue === 'number') argValue = argValue.toString()

    let first = !path.includes('?')
    path += first ? '?' : '&'
    path += `${argName}=${argValue}`
    return path
}