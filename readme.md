This project is still in development and is in a really early state. It will implement the API from [immich](https://immich.app/docs/api).

Don't use this. At least not yet.

# Api changes ⚠
this is all album stuff for `immich >= 1.106.0`. due to [this](https://github.com/immich-app/immich/pull/9667) pull request, the album api has changed.

for older immich versions, use the version `1.2.0` of this package.
`npm i immichapi@1.2.0`

## currently implemented:

* [x] auth method via api key
* Album:
    - [x] getAllAlbums
    - [ ] createAlbum
    - [ ] getAlbumCount
    - [ ] deleteAlbum
    - [x] getAlbumInfo
    - [ ] updateAlbumInfo
    - [x] removeAssetFromAlbum
    - [x] addAssetsToAlbum
    - [ ] removeUserFromAlbum
    - [ ] addUsersToAlbum
* Api Key
    - [ ] getApiKeys
    - [ ] createApiKey
    - [ ] deleteApiKey
    - [ ] getApiKey
    - [ ] updateApiKey
* Asset
    - [ ] deleteAssets
    - [x] getAllAssets
    - [ ] updateAssets
    - [ ] checkBulkUpload
    - [ ] getCuratedLocations
    - [ ] getCuratedObjects
    - [ ] getAllUserAssetsByDeviceId
    - [ ] checkExistingAssets
    - [ ] serveFile
    - [ ] runAssetJobs
    - [ ] getMapMarkers
    - [ ] getMemoryLane
    - [x] getRandom
    - [ ] getAssetSearchTerms
    - [ ] updateStackParent
    - [ ] getAssetStatistics
    - [ ] getAssetThumbnail
    - [ ] getTimeBucket
    - [ ] getTimeBuckets
    - [x] uploadFile
    - [x] getAssetInfo
    - [ ] updateAsset
* Audit
    - [ ] getAuditDeletes
    - [ ] getAuditFiles
    - [ ] getFileChecksums
    - [ ] fixAuditFiles
* Authentication
    - [ ] signUpAdmin
    - [ ] changePassword
    - [ ] logoutAuthDevices
    - [ ] getAuthDevices
    - [ ] logoutAuthDevice
    - [ ] login
    - [ ] logout
    - [ ] validateAccessToken
* Download
    - [ ] downloadArchive
    - [x] downloadFile
    - [ ] getDownloadInfo
* Face
    - [ ] getFaces
    - [ ] reassignFacesById
* Job
    - [ ] getAllJobsStatus
    - [ ] sendJobCommand
* Library
    - [ ] getLibraries
    - [ ] createLibrary
    - [ ] deleteLibrary
    - [ ] getLibraryInfo
    - [ ] updateLibrary
    - [ ] removeOfflineFiles 
    - [ ] scanLibrary
    - [ ] getLibraryStatistics
* OAuth
    - [ ] startOAuth
    - [ ] finishOAuth
    - [ ] linkOAuthAccount
    - [ ] redirectOAuthToMobile
    - [ ] unlinkOAuthAccount
* Partner
    - [ ] getPartners
    - [ ] removePartner
    - [ ] createPartner
    - [ ] updatePartner
* Person
    - [ ] getAllPeople
    - [ ] createPerson
    - [ ] updatePeople
    - [ ] getPerson
    - [ ] updatePerson
    - [ ] getPersonAssets
    - [ ] mergePerson
    - [ ] reassignFaces
    - [ ] getPersonStatistics
    - [ ] getPersonThumbnail
* Search
    - [ ] getExploreData
    - [ ] searchMetadata
    - [ ] searchPerson
    - [ ] searchSmart
    - [ ] getSearchSuggestions
* Server Info
    - [ ] getServerInfo
    - [ ] setAdminOnboarding
    - [ ] getServerConfig
    - [ ] getServerFeatures
    - [ ] getSupportedMediaTypes
    - [x] pingServer
    - [ ] getServerStatistics
    - [ ] getTheme
    - [ ] getServerVersion
* Shared Link
    - [ ] getAllSharedLinks
    - [ ] createSharedLink
    - [ ] getMySharedLink
    - [ ] removeSharedLink
    - [ ] getSharedLinkById
    - [ ] updateSharedLink
    - [ ] removeSharedLinkAssets
    - [ ] addSharedLinkAssets
* System Config
    - [ ] getConfig
    - [ ] updateConfig
    - [ ] getConfigDefaults
    - [ ] getMapStyle
    - [ ] getStorageTemplateOptions
* Tag
    - [ ] getAllTags
    - [ ] createTag
    - [ ] deleteTag
    - [ ] getTagById
    - [ ] updateTag
    - [ ] untagAssets
    - [ ] getTagAssets
    - [ ] tagAssets
* Trash
    - [ ] emptyTrash
    - [ ] restoreTrash
    - [ ] restoreAssets
* User
    - [x] getAllUsers
    - [ ] createUser
    - [ ] updateUser
    - [x] getUserById
    - [x] getMyUserInfo
    - [ ] deleteProfileImage
    - [ ] createProfileImage
    - [ ] getProfileImage
    - [ ] deleteUser
    - [ ] restoreUser
