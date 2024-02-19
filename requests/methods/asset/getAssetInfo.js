const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {string} id
     * @param {string}[key] optional.
    * @returns {{path: string, method?: string }}
     */
    (id, key) => {
        if (!id) throw new Error('id is required')
        let res = {
            path: `/asset/${id}`
        }
        // first param with ? and the rest with &
        res.path = argParser(res.path, key, 'key')


        return res
    })