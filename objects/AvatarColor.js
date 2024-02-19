module.exports = class AvatarColor {
    /**
     * @param {"primary" | "pink" | "red" | "yellow" | "blue" | "green" | "purple" | "orange" | "gray" | "amber"} color Possible values: [primary, pink, red, yellow, blue, green, purple, orange, gray, amber]
     */
    constructor(color) {
        this.color = color

        if (!["primary", "pink", "red", "yellow", "blue", "green", "purple", "orange", "gray", "amber"].includes(color)) {
            throw new Error('Invalid color')
        }
    }
    toString() {
        return this.color
    }
}