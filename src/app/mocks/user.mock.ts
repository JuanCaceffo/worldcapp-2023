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
  criteria: 'TODO5'
}
