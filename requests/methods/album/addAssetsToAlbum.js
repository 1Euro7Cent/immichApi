const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {string} albumId
     * @param {string[]} assets the asset ids to add to the album
     * @param {string} [key] optional.
     * @returns {{path: string, data: string, method: string}}
     */
    (albumId, assets, key) => {
        if (!albumId) throw new Error('id is required')
        if (!assets) throw new Error('assets are required')
        if (!assets.length) throw new Error('assets are required')

        let data = {
            ids: assets, // array of asset
        }

        let res = {
            path: `/album/${albumId}/assets`,
            data: JSON.stringify(data),
            method: "put"
        }

        res.path = argParser(res.path, key, 'key')
        return res
    })