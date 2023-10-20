import {HttpClient} from '@angular/common/http'
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

  async figuritaRequest(figurita: Figurita) {
    await lastValueFrom(
      this.httpClient.patch(`${API_URL}/user/request-figurita`, {
        userLogedID: UserService.userLogedID,
        requestedUserID: figurita.props.ownerID,
        requestedFiguID: figurita.props.cardID
      })
    )
  }
}
