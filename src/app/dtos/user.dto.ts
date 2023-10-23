export interface UserLoginDTO {
  userName: string
  password: string
}
export interface UserLoginResponseDTO {
  userLogedID: number
}
export interface UserProfileInfoDTO {
  name: string
  lastName: string
  email: string
  birthdate: string
  address: {
    provincia: string
    localidad: string
    calle: string
    altura: number
    ubiGeografica: {
      x: number
      y: number
    }
  }
  exchangeProximity: number
  criteria: string
}

export interface UserInfoDTO {
  username: string
  age: number
  location: string
}
