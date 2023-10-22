export interface UserLoginDTO {
  userName: string
  password: string
}
export interface UserLoginResponseDTO {
  userLogedID: number
}
export interface ProfileInfoDTO {
  name: string
  lastName: string
  email: string
  //TODO: Ver si dejarlo como string o pasarlo a Date
  birthdate: string
  province: string
  location: string
  streetName: string
  streetNumber: number
  latitude: number
  longitude: number
  exchangeProximity: number
  criteria: string
}
