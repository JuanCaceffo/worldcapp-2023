import {HttpClient} from '@angular/common/http'
import {MockedRegistredUsers} from 'src/app/mocks/user.mock'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {UserLoginResponseDTO, UserLoginDTO} from 'src/app/dtos/user.dto'
import {Injectable} from '@angular/core'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}
  static userLogedID?: number

  async login(userData: UserLoginDTO) {
    const response$ = this.httpClient.post<UserLoginResponseDTO>(
      `${API_URL}/user/login`,
      userData
    )
    const userId = await lastValueFrom(response$)
    UserService.userLogedID = userId.userLogedID
  }

  figuritaRequest(figurita: Figurita) {
    MockedRegistredUsers.forEach((user) => {
      user.userID === UserService.userLogedID
        ? user.figuritasList?.push(figurita.props)
        : console.error('problema')
    })
  }
}
