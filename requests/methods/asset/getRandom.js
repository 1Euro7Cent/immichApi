const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {number} [count ] optional
     * @returns {{path: string}}
     */
    (count) => {
        let res = {
            path: '/asset/random'
        }
        // first param with ? and the rest with &
        res.path = argParser(res.path, count, 'count')


        return res
    })