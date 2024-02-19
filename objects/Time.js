module.exports = class Time {
    /**
     * @param {string} time time formatted in a string 
     */
    constructor(time) {
        this.rawTime = time
        this.time = new Date(time)
    }
}