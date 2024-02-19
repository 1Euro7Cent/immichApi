const AvatarColor = require("./AvatarColor")
const Time = require("./Time")

module.exports = class User {

    constructor() {
        /**@type {AvatarColor | undefined}*/
        this.AvatarColor
        /**@type {Time | undefined}*/
        this.createdAt
        /**@type {Time | undefined}*/
        this.deletedAt
        /**@type {string | undefined}*/
        this.email
        /**@type {string | undefined}*/
        this.externalPath
        /**@type {string | undefined}*/
        this.id
        /**@type {boolean | undefined}*/
        this.isAdmin
        /**@type {boolean | undefined}*/
        this.memoriesEnabled
        /**@type {string | undefined}*/
        this.name
        /**@type {string | undefined}*/
        this.oauthId
        /**@type {string | undefined}*/
        this.profileImagePath
        /**@type {number | undefined}*/
        this.quotaSizeInBytes
        /**@type {number | undefined}*/
        this.quotaUsageInBytes
        /**@type {boolean | undefined}*/
        this.shouldChangePassword
        /**@type {string | undefined}*/
        this.storageLabel
        /**@type {Time | undefined}*/
        this.updatedAt
    }
    fromJson(json) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }
        if (json.avatarColor) this.AvatarColor = new AvatarColor(json.avatarColor)
        if (json.createdAt) this.createdAt = new Time(json.createdAt)
        if (json.deletedAt) this.deletedAt = new Time(json.deletedAt)
        this.email = json.email
        this.externalPath = json.externalPath
        this.id = json.id
        this.isAdmin = json.isAdmin
        this.memoriesEnabled = json.memoriesEnabled
        this.name = json.name
        this.oauthId = json.oauthId
        this.profileImagePath = json.profileImagePath
        this.quotaSizeInBytes = json.quotaSizeInBytes
        this.quotaUsageInBytes = json.quotaUsageInBytes
        this.shouldChangePassword = json.shouldChangePassword
        this.storageLabel = json.storageLabel
        if (json.updatedAt) this.updatedAt = new Time(json.updatedAt)

        return this
    }
}