const argParser = require("../../../argParser")

module.exports = (
    /**
      * @returns {{path: string, method?: string}}
     */
    () => {
        let res = {
            path: `/server-info/ping`
        }

        return res
    })