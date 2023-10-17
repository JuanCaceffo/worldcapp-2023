import {MockedRegistredUsers} from 'src/app/mocks/user.mock'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {userLoginDTO} from 'src/app/dtos/user.dto'
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
