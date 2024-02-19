const album = {
    getAllAlbums: require('./methods/album/getAllAlbums')
}
const asset = {
    getAllAssets: require('./methods/asset/getAllAssets')
}
const download = {
    downloadFile: require('./methods/download/downloadFile')
}

module.exports = {
    album,
    asset,
    download
}