const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {number} [count ] optional
    * @returns {{path: string, method?: string}}
     */
    (count) => {
        let res = {
            path: '/assets/random'
        }
        // first param with ? and the rest with &
        res.path = argParser(res.path, count, 'count')


        return res
    })