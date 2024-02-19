const fs = require('fs');
const FormData = require('form-data');
const Time = require("../../../objects/Time")

module.exports = (
    /**
     * @param { ReadStream} file
     * @param {String} deviceAssetId
     * @param {String} deviceId
     * @param {String} [duration] optional
     * @param {Time} fileCreatedAt
     * @param {Time} fileModifiedAt
     * @param {boolean} [isArchived] optional
     * @param {boolean} [isExternal] optional
     * @param {boolean} [isFavorite] optional
     * @param {boolean} [isOffline] optional
     * @param {boolean} [isReadOnly] optional
     * @param {boolean} [isVisible] optional
     * @param {String} [libraryId] optional
     * @param { ReadStream} [livePhotoData] optional
     * @param { ReadStream} [sidecarData] optional
     * @returns {{path: string}}
     */
        (file, deviceAssetId, deviceId, duration, fileCreatedAt, fileModifiedAt, isArchived, isExternal, isFavorite, isOffline, isReadOnly, isVisible, libraryId, livePhotoData, sidecarData) => {
        let res = {
            path: '/asset/upload',
            method: 'post',
        }
        const form = new FormData();
        form.append('assetData', file);
        form.append('deviceAssetId', deviceAssetId);
        form.append('deviceId', deviceId);
        form.append('fileCreatedAt', fileCreatedAt.time.toISOString());
        form.append('fileModifiedAt', fileModifiedAt.time.toISOString());
        if (isArchived !== undefined) form.append('isArchived', isArchived.toString());
        if (isExternal !== undefined) form.append('isExternal', isExternal.toString());
        if (isFavorite !== undefined) form.append('isFavorite', isFavorite.toString());
        if (isOffline !== undefined) form.append('isOffline', isOffline.toString());
        if (isReadOnly !== undefined) form.append('isReadOnly', isReadOnly.toString());
        if (isVisible !== undefined) form.append('isVisible', isVisible.toString());
        if (libraryId !== undefined) form.append('libraryId', libraryId);
        if (livePhotoData !== undefined) form.append('livePhotoData', livePhotoData);
        if (sidecarData !== undefined) form.append('sidecarData', sidecarData);
        if (duration !== undefined) form.append('duration', duration);

        res.data = form;
        // first param with ? and the rest with &

        return res
    })