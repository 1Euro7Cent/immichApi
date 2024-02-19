const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {boolean} isAll 
    * @returns {{path: string, method?: string }}
     */
    (isAll) => {
        let res = {
            path: `/user`,
        }

        res.path = argParser(res.path, isAll, 'isAll')
        return res
    })