import {USER_KEY_STORAGE} from '../services/user-service/user.service'

export const getUserId = () => sessionStorage.getItem(USER_KEY_STORAGE) ?? -1
