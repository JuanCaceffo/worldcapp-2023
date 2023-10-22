import {ProfileInfoDTO} from '../dtos/user.dto'
import {figuritaDTO} from './../dtos/figurita.dto'
/* esta interfaz nos sirve para mockar la busqueda que se haria
en el repo de user del backend (se va a ir extendiendo en medida
de lo necesario*/
export interface completeUserMock {
  userID: number
  userName: string
  password: string
  figuritasList?: figuritaDTO[]
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

export const profileInfoUserMock: ProfileInfoDTO = {
  name: 'Facundo',
  lastName: 'Jauretche',
  email: 'el_loquito@test.com',
  birthdate: '22/12/1990',
  province: 'Buenos Aires',
  location: '3 de Febrero',
  streetName: 'Calle Falsa',
  streetNumber: 123,
  latitude: 34.12331231,
  longitude: -22.123125807,
  exchangeProximity: 3,
  criteria: 'TODO'
}
