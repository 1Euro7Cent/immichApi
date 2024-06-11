const album = {
    getAllAlbums: require('./methods/album/getAllAlbums'),
    getAlbumInfo: require('./methods/album/getAlbumInfo'),
    addAssetsToAlbum: require('./methods/album/addAssetsToAlbum'),
    removeAssetsFromAlbum: require('./methods/album/removeAssetsFromAlbum'),
}
const asset = {
    getAllAssets: require('./methods/asset/getAllAssets'),
    uploadFile: require('./methods/asset/uploadFile'),
    getRandom: require('./methods/asset/getRandom'),
    getAssetInfo: require('./methods/asset/getAssetInfo'),
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

const timeline = {
    getTimeBuckets: require('./methods/timeline/getTimeBuckets'),
    getTimeBucket: require('./methods/timeline/getTimeBucket'),
}

module.exports = {
    album,
    asset,
    download,
    serverInfo,
    user,
    timeline
}