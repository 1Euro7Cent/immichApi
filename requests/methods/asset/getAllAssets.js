const argParser = require("../../../argParser")
const Time = require("../../../objects/Time")

module.exports = (
    /**
     * @param {boolean} [isArchived] optional
     * @param {boolean} [isFavorite] optional
     * @param {number} [skip] optional
     * @param {number} [take] optional
     * @param {Time} [updatedAfter] optional
     * @param {Time} [updatedBefore] optional
     * @param {string} [userId] optional
    * @returns {{path: string, method?: string }}
     */
    (isArchived, isFavorite, skip, take, updatedAfter, updatedBefore, userId) => {
        let res = {
            path: '/asset'
        }
        // first param with ? and the rest with &
        res.path = argParser(res.path, isArchived, 'isArchived')
        res.path = argParser(res.path, isFavorite, 'isFavorite')
        res.path = argParser(res.path, skip, 'skip')
        res.path = argParser(res.path, take, 'take')
        res.path = argParser(res.path, updatedAfter, 'updatedAfter')
        res.path = argParser(res.path, updatedBefore, 'updatedBefore')
        res.path = argParser(res.path, userId, 'userId')

        return res
    })