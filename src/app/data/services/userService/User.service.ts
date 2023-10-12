import {MockedRegistredUsers} from '../../mocks/MockedUsersDTOS'
import {Figurita} from '../../models/cards/Figurita'
import {userLoginDTO} from './../../dto/userDTOS'
import {Injectable} from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() {}
  userLogedID?: number

  login(userData: userLoginDTO) {
    this.userLogedID = MockedRegistredUsers.find((userJSON) => {
      userJSON.userName === userData.userName &&
        userJSON.password === userData.password
    })?.userID

    //simulacion de un retorno de estado
    return this.userLogedID ? 200 : 404
  }

  figuritaRequest(figurita: Figurita) {
    MockedRegistredUsers.forEach((user) => {
      user.userID === this.userLogedID
        ? user.figuritasList?.push(figurita.props)
        : console.error('problema')
    })
  }
}
