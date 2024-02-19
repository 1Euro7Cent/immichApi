const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {string} id 
    * @returns {{path: string, method?: string }}
     */
    (id) => {
        if (!id) throw new Error('id is required')
        let res = {
            path: `/user/info/${id}`,
        }

        // res.path = argParser(res.path, isAll, 'isAll')
        return res
    })