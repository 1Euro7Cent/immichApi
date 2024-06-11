const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {string} id
     * @param {string}[key] optional. Only returns albums that contain the asset Ignores the shared parameter undefined: get all albums
     * @returns {{path: string, method?: string}}
     */
    (id, key) => {
        if (!id) throw new Error('id is required')
        let res = {
            path: `/download/assets/${id}`,
            method: 'post'
        }

        res.path = argParser(res.path, key, 'key')
        return res
    })