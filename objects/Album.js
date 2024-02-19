const Asset = require("./Asset")
const Time = require("./Time")
const User = require("./User")

module.exports = class Album {
    constructor() {

        /**@type {string | undefined}*/
        this.albumName
        /**@type {string | undefined}*/
        this.description
        /**@type {string | undefined}*/
        this.albumThumbnailAssetId
        /**@type {Time | undefined}*/
        this.createdAt
        /**@type {Time | undefined}*/
        this.updatedAt
        /**@type {string | undefined}*/
        this.id
        /**@type {string | undefined}*/
        this.ownerId
        /**@type {User | undefined}*/
        this.owner
        /**@type {User[]}*/
        this.sharedUsers = []
        /**@type {boolean | undefined}*/
        this.shared
        /**@type {boolean | undefined}*/
        this.hasSharedLink
        /**@type {Time | undefined}*/
        this.startDate
        /**@type {Time | undefined}*/
        this.endDate
        /**@type {Asset[]}*/
        this.assets = []
        /**@type {number | undefined}*/
        this.assetCount
        /**@type {boolean | undefined}*/
        this.isActivityEnabled
        /**@type {Time | undefined}*/
        this.lastModifiedAssetTimestamp

        //*/
    }
    /**
     * @param {string  | object} json
     */
    fromJson(json) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }

        this.albumName = json.albumName
        this.description = json.description
        this.albumThumbnailAssetId = json.albumThumbnailAssetId
        if (json.createdAt) this.createdAt = new Time(json.createdAt)
        if (json.updatedAt) this.updatedAt = new Time(json.updatedAt)
        this.id = json.id
        this.ownerId = json.ownerId
        if (json.owner) this.owner = new User().fromJson(json.owner)
        if (json.sharedUsers) {
            for (let user of json.sharedUsers) {
                this.sharedUsers.push(new User().fromJson(user))
            }
        }
        this.shared = json.shared
        this.hasSharedLink = json.hasSharedLink
        if (json.startDate) this.startDate = new Time(json.startDate)
        if (json.endDate) this.endDate = new Time(json.endDate)
        if (json.assets) {
            for (let asset of json.assets) {
                this.assets.push(new Asset().fromJson(asset))
            }
        }
        this.assetCount = json.assetCount
        this.isActivityEnabled = json.isActivityEnabled
        if (json.lastModifiedAssetTimestamp) this.lastModifiedAssetTimestamp = new Time(json.lastModifiedAssetTimestamp)

        return this
    }
}