/* eslint-disable @typescript-eslint/no-unused-vars */
import {of} from 'rxjs'
import {API_URL} from '../config'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'
import {UserLoginDTO} from 'src/app/dtos/user.dto'
import {UserLoginResponseDTO} from 'src/app/dtos/user.dto'

//export const cardAsignada = new Figurita()
//export const puntoDeVentaAsignado = new PickupPoint()

export const usuarioLoginStub: UserLoginDTO = {
  userName: 'alejo',
  password: '123456'
}
export const usuarioLoginResponseStub: UserLoginResponseDTO = {userLogedID: 123}

export const httpClientSpy = jasmine.createSpyObj('HttpClient', ['post'])
httpClientSpy.post
  .withArgs(`${API_URL}/user/login`, usuarioLoginStub)
  .and.returnValue(of(usuarioLoginResponseStub))
