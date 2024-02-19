const AvatarColor = require("./AvatarColor")
const Time = require("./Time")

module.exports = class People {

    constructor() {
        /*
        birthDate date
faces face[]
id uuid
id string
isHidden boolean
name string
thumbnailPath string
        */

        /**@type {Time | undefined}*/
        this.birthDate
        /**@type {Faces | undefined}*/
        this.faces
        /**@type {string | undefined}*/
        this.id
        /**@type {number | undefined}*/
        this.isHidden
        /**@type {string | undefined}*/
        this.name
        /**@type {string | undefined}*/
        this.thumbnailPath

    }
    fromJson(json) {
        if (typeof json === 'string') {
            json = JSON.parse(json)
        }

        if (json.birthDate) this.birthDate = new Time(json.birthDate)
        // todo: add Faces class
        this.id = json.id
        this.isHidden = json.isHidden
        this.name = json.name
        this.thumbnailPath = json.thumbnailPath


        return this
    }
}