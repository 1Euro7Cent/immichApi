const axios = require('axios')
const methods = require('./requests/methods')
const Album = require('./objects/Album')
const Time = require('./objects/Time')
const User = require('./objects/User')
const Asset = require('./objects/Asset')

module.exports = class Immich {
    constructor(url, apiKey) {
        this.url = url
        this.apiKey = apiKey
        if (url === undefined || apiKey === undefined) {
            throw new Error('url and apiKey are required')
        }

        // url syntax check

        if (url.endsWith('/')) {
            this.url = url.slice(0, -1)
        }
        if (!url.endsWith('/api')) {
            this.url = url + '/api'
        }
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            throw new Error('url must start with http:// or https://')
        }

    }

    /**
     * @param {string} [assetId]
     * @param {boolean} [shared]
     * @returns {Promise<Album[]>}
     */
    async getAllAlbums(assetId, shared) {
        let path = methods.album.getAllAlbums(assetId, shared).path

        let json = await this.request(path)
        let albums = []
        for (let album of json) {
            albums.push(new Album().fromJson(album))
        }
        return albums
    }
    /**
     * @param {boolean} [isArchived] optional
     * @param {boolean} [isFavorite] optional
     * @param {number} [skip] optional
     * @param {number} [take] optional
     * @param {Time} [updatedAfter] optional
     * @param {Time} [updatedBefore] optional
     * @param {string} [userId] optional
     * @returns {Promise<Asset[]>}
     */
    async getAllAssets(isArchived, isFavorite, skip, take, updatedAfter, updatedBefore, userId) {
        let path = methods.asset.getAllAssets(isArchived, isFavorite, skip, take, updatedAfter, updatedBefore, userId).path
        let json = await this.request(path)
        let assets = []
        for (let asset of json) {
            assets.push(new Asset().fromJson(asset))
        }
        return assets
    }

    /**
     * @param {ReadStream} file
     * @param {String} deviceAssetId
     * @param {String} deviceId
     * @param {Time} fileCreatedAt
     * @param {Time} fileModifiedAt
     * @param {String} [duration] optional
     * @param {boolean} [isArchived] optional
     * @param {boolean} [isExternal] optional
     * @param {boolean} [isFavorite] optional
     * @param {boolean} [isOffline] optional
     * @param {boolean} [isReadOnly] optional
     * @param {boolean} [isVisible] optional
     * @param {String} [libraryId] optional
     * @param {ReadStream} [livePhotoData] optional
     * @param {ReadStream} [sidecarData] optional
     * @returns {{path: string}}
     */
    async uploadFile(file, deviceAssetId, deviceId, fileCreatedAt, fileModifiedAt, duration, isArchived, isExternal, isFavorite, isOffline, isReadOnly, isVisible, libraryId, livePhotoData, sidecarData) {
        let path = methods.asset.uploadFile(file, deviceAssetId, deviceId, duration, fileCreatedAt, fileModifiedAt, isArchived, isExternal, isFavorite, isOffline, isReadOnly, isVisible, libraryId, livePhotoData, sidecarData)
        return await this.request(path.path, path.method, path.data, 'object', 'multipart/form-data')
    }


    /**
     * @param {string} id
     * @param {string}[key] optional. Only returns albums that contain the asset Ignores the shared parameter undefined: get all albums
     * @returns {Promise<ArrayBuffer>} the file content
     */

    async downloadFile(id, key) {

        let path = methods.download.downloadFile(id, key)

        return await this.request(path.path, path.method, undefined, 'arraybuffer')
    }

    /**
     * @returns {Promise<string>}
     */
    async pingServer() {
        let path = methods.serverInfo.pingServer().path
        return await this.request(path)
    }

    /**
     * @param {boolean} isAll 
     * @returns {Promise<User[]>}
     */
    async getAllUsers(isAll) {
        let path = methods.user.getAllUsers(isAll).path
        let json = await this.request(path)
        let users = []
        for (let user of json) {
            users.push(new User().fromJson(user))
        }
        return users
    }

    /**
     * @param {string} id 
     * @returns {Promise<User>}
     */
    async getUserById(id) {
        let path = methods.user.getUserById(id).path
        let json = await this.request(path)
        return new User().fromJson(json)
    }

    /**
     * @returns {Promise<User>}
     */
    async getMyUserInfo() {
        let path = methods.user.getMyUserInfo().path
        let json = await this.request(path)
        return new User().fromJson(json)
    }

    /**
     * @param {string} id
     * @param {string}[key] optional.
     * @param {boolean}[withoutAssets] optional.
     * @returns {Promise<Album>}
     */
    async getAlbumInfo(id, key, withoutAssets) {
        let path = methods.album.getAlbumInfo(id, key, withoutAssets).path
        let json = await this.request(path)
        return new Album().fromJson(json)
    }

    /**
     *
     * @param {string} albumId
     * @param {string[]} assets the asset ids to add to the album
     * @param {string} [key] optional.
     * @returns
     */
    async addAssetsToAlbum(albumId, assets, key) {
        let path = methods.album.addAssetsToAlbum(albumId, assets, key)
        let json = await this.request(path.path, path.method, path.data)
        return json
    }
    /**

     * @param {number} [count ] optional
     * @returns {Promise<Asset[]>}
     */
    async getRandomAssets(count) {
        let path = methods.asset.getRandom(count).path
        let json = await this.request(path)
        let assets = []
        for (let asset of json) {
            assets.push(new Asset().fromJson(asset))
        }
        return assets
    }

    /**
     * @param {string} id
     * @param {string}[key] optional.
     * @returns
     */
    async getAssetInfo(id, key) {
        let path = methods.asset.getAssetInfo(id, key).path
        let json = await this.request(path)
        return new Asset().fromJson(json)
    }


    async request(path, method = "get", data, responseType, contentType = 'application/json') {
        let config = {
            method: method,
            maxBodyLength: Infinity,
            url: this.url + path,
            headers: {
                'Accept': 'application/octet-stream',
                'Content-Type': contentType,
                'x-api-key': this.apiKey
            },
            data: data,
            responseType: responseType
        }
        // console.log(config)

        // @ts-ignore
        const response = await axios(config)
        // console.log(response)
        if (response.status / 100 !== 2) throw new Error(response)
        return response.data
    }
}
