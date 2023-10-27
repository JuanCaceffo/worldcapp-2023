import {UserInfoDTO, UserProfileInfoDTO} from '../dtos/user.dto'
import {FiguritaDTO} from './../dtos/figurita.dto'
/* esta interfaz nos sirve para mockar la busqueda que se haria
en el repo de user del backend (se va a ir extendiendo en medida
de lo necesario*/
export interface completeUserMock {
  userID: number
  userName: string
  password: string
  figuritasList?: FiguritaDTO[]
}

export const MockedRegistredUsers: completeUserMock[] = [
  {
    userID: 1,
    userName: 'juanchito',
    password: '1234'
  },
  {
    userID: 2,
    userName: 'soledad',
    password: '4321'
  }
]

export const profileInfoUserMock: UserProfileInfoDTO = {
  name: 'Facundo',
  lastName: 'Jauretche',
  email: 'el_loquito@test.com',
  birthdate: '1990-12-22',
  address: {
    provincia: 'Buenos Aires',
    localidad: '3 de Febrero',
    calle: 'Calle Falsa',
    altura: 123,
    ubiGeografica: {
      x: 34.12331231,
      y: -22.123125807
    }
  },
  exchangeProximity: 3,
  criteria: 'Nacionalista'
}

export const initialProfileInfoUserMock: UserProfileInfoDTO = {
  name: '',
  lastName: '',
  email: '',
  birthdate: '',
  address: {
    provincia: '',
    localidad: '',
    calle: '',
    altura: 0,
    ubiGeografica: {
      x: 0,
      y: 0
    }
  },
  exchangeProximity: 0,
  criteria: ''
}

export const userInfoMock: UserInfoDTO = {
  username: 'Facundinho',
  age: 26,
  location: '3 de Febrero',
  picturePath:
    'https://www.infobae.com/new-resizer/MQBzwcl--Jgxfm53chAmEYTm6V4=/arc-anglerfish-arc2-prod-infobae/public/PPHDXSRNQKYLGBP6WNPLD6S7DM.jpg'
}
