const ImageType = require("./ImageType")
const People = require("./People")
const Time = require("./Time")
const User = require("./User")

module.exports = class Asset {
    /*
 id: '5d15668b-6133-42ab-9c48-5d2f6d395d37',
    type: 'IMAGE',
    thumbhash: 'XhgGFQZva2ybyMbHhHd2mQd1gkAY',
    localDateTime: '2024-02-12T15:01:42.451Z',
    resized: true,
    duration: '0:00:00.00000',
    livePhotoVideoId: null,
    hasMetadata: true,
    deviceAssetId: 'web-1834x2448_72cd5d9c68955a269026977817e6e87d.jpg-1707750102451',
    ownerId: '61aeae25-b791-42fb-b20b-27ee6db3198f',
    deviceId: 'WEB',
    libraryId: '52b43065-8b2e-4f41-9367-8a84b0265f49',
    originalPath: 'upload/library/61aeae25-b791-42fb-b20b-27ee6db3198f/2024/2024-02-12/1834x2448_72cd5d9c68955a269026977817e6e87d.jpg',
    originalFileName: '1834x2448_72cd5d9c68955a269026977817e6e87d',
    fileCreatedAt: '2024-02-12T15:01:42.451Z',
    fileModifiedAt: '2024-02-12T15:01:42.451Z',
    updatedAt: '2024-02-12T15:01:52.065Z',
    isFavorite: false,
    isArchived: false,
    isTrashed: false,
    exifInfo: exif object,
    tags: [],
    people: [],
    checksum: '3pcaK/LaoCq5np2TbgMH7RyWggw=',
    stackCount: null,
    isExternal: false,
    isOffline: false,
    isReadOnly: false

    //*/
    constructor() {

        /**@type {string | undefined}*/
        this.id
        /**@type {ImageType | undefined}*/
        this.type
        /**@type {string | undefined}*/
        this.thumbhash
        /**@type {Time | undefined}*/
        this.localDateTime
        /**@type {boolean | undefined}*/
        this.resized
        /**@type {string | undefined}*/
        this.duration
        /**@type {string | undefined}*/
        this.livePhotoVideoId
        /**@type {boolean | undefined}*/
        this.hasMetadata
        /**@type {string | undefined}*/
        this.deviceAssetId
        /**@type {string | undefined}*/
        this.ownerId
        /**@type {string | undefined}*/
        this.deviceId
        /**@type {string | undefined}*/
        this.libraryId
        /**@type {string | undefined}*/
        this.originalPath
        /**@type {string | undefined}*/
        this.originalFileName
        /**@type {Time | undefined}*/
        this.fileCreatedAt
        /**@type {Time | undefined}*/
        this.fileModifiedAt
        /**@type {Time | undefined}*/
        this.updatedAt
        /**@type {boolean | undefined}*/
        this.isFavorite
        /**@type {boolean | undefined}*/
        this.isArchived
        /**@type {boolean | undefined}*/
        this.isTrashed
        /**@type {ExifInfo | undefined}*/
        this.exifInfo
        /**@type {Tag[]}*/
        this.tags = []
        /**@type {People[]}*/
        this.people = []
        /**@type {string | undefined}*/
        this.checksum
        /**@type {number | undefined}*/
        this.stackCount
        /**@type {boolean | undefined}*/
        this.isExternal
        /**@type {boolean | undefined}*/
        this.isOffline
        /**@type {boolean | undefined}*/
        this.isReadOnly



    }
    /**
     * @param {string  | object} json
     */
    fromJson(json) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }

        this.id = json.id
        if (json.type) this.type = new ImageType(json.type)
        this.thumbhash = json.thumbhash
        if (json.localDateTime) this.localDateTime = new Time(json.localDateTime)
        this.resized = json.resized
        this.duration = json.duration
        this.livePhotoVideoId = json.livePhotoVideoId
        this.hasMetadata = json.hasMetadata
        this.deviceAssetId = json.deviceAssetId
        this.ownerId = json.ownerId
        this.deviceId = json.deviceId
        this.libraryId = json.libraryId
        this.originalPath = json.originalPath
        this.originalFileName = json.originalFileName
        if (json.fileCreatedAt) this.fileCreatedAt = new Time(json.fileCreatedAt)
        if (json.fileModifiedAt) this.fileModifiedAt = new Time(json.fileModifiedAt)
        if (json.updatedAt) this.updatedAt = new Time(json.updatedAt)
        this.isFavorite = json.isFavorite
        this.isArchived = json.isArchived
        this.isTrashed = json.isTrashed
        // todo: add exifInfo
        // todo: add tags
        if (json.people) {
            for (let person of json.people) {
                this.people.push(new People().fromJson(person))
            }
        }
        this.checksum = json.checksum
        this.stackCount = json.stackCount
        this.isExternal = json.isExternal
        this.isOffline = json.isOffline
        this.isReadOnly = json.isReadOnly
        return this
    }
}