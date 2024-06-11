const argParser = require("../../../argParser")

module.exports = (
    /**
     * @param {string} albumId
     * @param {string[]} assets the asset ids to remove to the album
     * @returns {{path: string, data: string, method: string}}
     */
    (albumId, assets) => {
        if (!albumId) throw new Error('id is required')
        if (!assets) throw new Error('assets are required')
        if (!assets.length) throw new Error('assets are required')

        let data = {
            ids: assets, // array of asset
        }

        let res = {
            path: `/albums/${albumId}/assets`,
            data: JSON.stringify(data),
            method: "delete"
        }
        return res
    })