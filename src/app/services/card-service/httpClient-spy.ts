import {mockCardData} from 'src/app/mocks/card.mock'
import {API_URL} from '../config'
import {of} from 'rxjs'
import {CardSearch} from 'src/app/models/searchbar/searchbar'
import {UserLoginDTO, UserLoginResponseDTO, UserProfileInfoDTO} from 'src/app/dtos/user.dto'

export const userStub: UserLoginDTO = {
  userName: 'madescoses',
  password: '12345'
}

export const userLoginOkStub: UserLoginResponseDTO = {userLogedID: 321}

export const userProfileStub: UserProfileInfoDTO = {
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

export const httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post'])

httpClientSpy.get
  .withArgs(`${API_URL}/figuritas/intercambiar/${userLoginOkStub.userLogedID}`, {
    params: new CardSearch().httpParams()
  })
  .and.returnValue(of(mockCardData))

// Spy de información de perfil de usuario
httpClientSpy.get
  .withArgs(`${API_URL}/user/${userLoginOkStub.userLogedID}/info-profile`)
  .and.returnValue(of(userProfileStub))

// Spy de login de usuario
httpClientSpy.post
  .withArgs(`${API_URL}/user/login`, userStub)
  .and.returnValue(of(userLoginOkStub))