const argParser = require("../../../argParser")

module.exports = (
    /**
     * @returns {{path: string, method?: string}}
     */
    () => {

        let res = {
            path: `/user/me`,
        }

        // res.path = argParser(res.path, isAll, 'isAll')
        return res
    })