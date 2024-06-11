const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {string} id 
     * @param {string}[key] optional.
     * @param {boolean}[withoutAssets] optional.
    * @returns {{path: string, method?: string }}
     */
    (id, key, withoutAssets) => {
        if (!id) throw new Error('id is required')
        let res = {
            path: `/albums/${id}`,
        }

        // res.path = argParser(res.path, id, 'id')
        res.path = argParser(res.path, key, 'key')
        res.path = argParser(res.path, withoutAssets, 'withoutAssets')
        return res
    })