const argParser = require("../../../argParser")


module.exports = (
    /**
     * @param {"DAY" | "MONTH"} size
     * @param {string} [albumId] optional.
     * @param {boolean} [isArchived] optional.
     * @param {boolean} [isFavorite] optional.
     * @param {boolean} [isTrashed] optional.
     * @param {string} [key] optional.
     * @param {"asc" | "desc"} [order] optional.
     * 
     * @param {string} [uuid] optional.
     * 
     * @param {boolean} [withPartners] optional.
     * @param {boolean} [withStacked] optional.
     * @returns {{path: string, method?: string }}
     */
    (size, albumId, isArchived, isFavorite, isTrashed, key, order, uuid, withPartners, withStacked) => {
        let res = {
            method: "get",
            path: "/timeline/buckets"
        }

        res.path = argParser(res.path, albumId, 'albumId')
        res.path = argParser(res.path, isArchived, 'isArchived')
        res.path = argParser(res.path, isFavorite, 'isFavorite')
        res.path = argParser(res.path, isTrashed, 'isTrashed')
        res.path = argParser(res.path, key, 'key')
        res.path = argParser(res.path, order, 'order')
        res.path = argParser(res.path, size, 'size')
        res.path = argParser(res.path, uuid, 'uuid')
        res.path = argParser(res.path, withPartners, 'withPartners')
        res.path = argParser(res.path, withStacked, 'withStacked')

        return res
    })