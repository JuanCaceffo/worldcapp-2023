export const USER_KEY_STORAGE = 'userLogedID'
export const USER_LAST_PROFILE_NAVIGATE_KEY = 'lastPathProfile'

export const getUserId = () => {
  const idLogedUser = sessionStorage.getItem(USER_KEY_STORAGE)
  return idLogedUser ? +idLogedUser : -1
}

export const getPathLastProfileNavigate = () => {
  return (
    sessionStorage.getItem(USER_LAST_PROFILE_NAVIGATE_KEY) ?? 'perfil-usuario'
  )
}
