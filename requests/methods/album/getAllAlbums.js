module.exports = (
    /**
     * @param {string} [assetId] optional. Only returns albums that contain the asset Ignores the shared parameter undefined: get all albums
     * @param {boolean} [shared]
     * @returns {{path: string}}
     */
    (assetId, shared) => {
        let res = {
            path: '/album'
        }
        res.path += assetId !== undefined ? `?assetId=${assetId}` : ''
        res.path += shared !== undefined ? (assetId !== undefined ? `&shared=${shared}` : `?shared=${shared}`) : ''
        return res
    })