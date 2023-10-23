export const USER_KEY_STORAGE = 'userLogedID'

export const getUserId = () => sessionStorage.getItem(USER_KEY_STORAGE) ?? -1
