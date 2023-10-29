export const USER_KEY_STORAGE = 'userLogedID'

export const getUserId = () => {
  const idLogedUser = sessionStorage.getItem(USER_KEY_STORAGE)
  return idLogedUser ? +idLogedUser : -1
}
