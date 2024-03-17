module.exports = class ImageType {
    /**
     * @param {"IMAGE" | "VIDEO" | "AUDIO" | "OTHER"} type  Possible values: [IMAGE, VIDEO, AUDIO, OTHER]
     */
    constructor(type) {
        this.type = type

        if (typeof this.type !== 'string') {
            if (typeof this.type.type == 'string') {
                this.type = this.type.type
            }
        }

        if (!["IMAGE", "VIDEO", "AUDIO", "OTHER"].includes(this.type)) {
            throw new Error('Invalid type')
        }
    }
    toString() {
        return this.type
    }
}