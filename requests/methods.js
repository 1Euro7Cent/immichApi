const album = {
    getAllAlbums: require('./methods/album/getAllAlbums'),
    getAlbumInfo: require('./methods/album/getAlbumInfo')
}
const asset = {
    getAllAssets: require('./methods/asset/getAllAssets'),
    uploadFile: require('./methods/asset/uploadFile')
}
const download = {
    downloadFile: require('./methods/download/downloadFile')
}
const serverInfo = {
    pingServer: require('./methods/serverInfo/pingServer')
}
const user = {
    getAllUsers: require('./methods/user/getAllUsers'),
    getUserById: require('./methods/user/getUserById'),
    getMyUserInfo: require('./methods/user/getMyUserInfo')
}

module.exports = {
    album,
    asset,
    download,
    serverInfo,
    user
}