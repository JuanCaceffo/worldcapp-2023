import {HttpClient} from '@angular/common/http'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {
  UserLoginResponseDTO,
  UserLoginDTO,
  UserProfileInfoDTO,
  UserInfoDTO,
  UserUpdateInfoDTO,
  UserAddFigu
} from 'src/app/dtos/user.dto'
import {Injectable} from '@angular/core'
import {API_URL} from '../config'
import {Observable, Subject, lastValueFrom} from 'rxjs'
import {USER_KEY_STORAGE, getUserId} from 'src/app/helpers/getUserId.helper'
import {FiguritaDTO} from 'src/app/dtos/figurita.dto'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  async login(userData: UserLoginDTO) {
    const response$ = this.httpClient.post<UserLoginResponseDTO>(
      `${API_URL}/user/login`,
      userData
    )
    const userId = await lastValueFrom(response$)
    sessionStorage.setItem(USER_KEY_STORAGE, userId.userLogedID.toString())
  }

  async figuritaRequest(figurita: Figurita) {
    await lastValueFrom(
      this.httpClient.patch(`${API_URL}/user/request-figurita`, {
        userLogedID: getUserId(),
        requestedUserID: figurita.props.idUsuario,
        requestedFiguID: figurita.props.id
      })
    )
  }

  async getFiguritas(path: string) {
    const figuritas$ = this.httpClient.get<FiguritaDTO[]>(path)
    const figuritas = await lastValueFrom(figuritas$)
    return figuritas.map((figuiDTO) => Figurita.fromJson(figuiDTO))
  }

  async getDuplicateFiguritas(): Promise<Figurita[]> {
    return this.getFiguritas(
      `${API_URL}/user/${getUserId()}/lista-figus-repetidas`
    )
  }

  async getMissingFigus(): Promise<Figurita[]> {
    return this.getFiguritas(
      `${API_URL}/user/${getUserId()}/lista-figus-faltantes`
    )
  }

  async getGiftableFigurita(userID: number, cardID: number): Promise<Figurita> {
    const card$ = this.httpClient.get<FiguritaDTO>(
      `${API_URL}/user/get-figurita-intercambio/usuario/${userID}/figurita/${cardID}`
    )
    const card = await lastValueFrom(card$)
    return Figurita.fromJson(card)
  }

  async getProfileInfo(): Promise<UserProfileInfoDTO> {
    const profileInfo$ = this.httpClient.get<UserProfileInfoDTO>(
      `${API_URL}/user/${getUserId()}/info-profile`
    )
    return await lastValueFrom(profileInfo$)
  }

  async editProfileInfo(
    profileInfo: UserProfileInfoDTO
  ): Promise<UserProfileInfoDTO> {
    const profileInfo$ = this.httpClient.patch<UserProfileInfoDTO>(
      `${API_URL}/user/${getUserId()}/info-profile`,
      profileInfo
    )
    return lastValueFrom(profileInfo$)
  }

  getUserInfo(): Promise<UserInfoDTO> {
    const userInfo$ = this.httpClient.get<UserInfoDTO>(
      `${API_URL}/user/${getUserId()}/user-info`
    )

    return lastValueFrom(userInfo$)
  }

  async editUsername(userInfo: UserInfoDTO): Promise<UserInfoDTO> {
    const editInfo$ = this.httpClient.patch<UserInfoDTO>(
      `${API_URL}/user/${getUserId()}/user-info`,
      userInfo
    )
    return lastValueFrom(editInfo$)
  }

  deleteFigu(path: string) {
    return lastValueFrom(this.httpClient.delete(path))
  }

  async deleteFiguRepe(figuID: number) {
    await this.deleteFigu(
      `${API_URL}/user/${getUserId()}/eliminar-figu-repe/${figuID}`
    )
  }
  async deleteFiguFaltante(figuID: number) {
    await this.deleteFigu(
      `${API_URL}/user/${getUserId()}/eliminar-figu-faltante/${figuID}`
    )
  }

  addFigu(path: string, figuID: number) {
    const body: UserAddFigu = {
      userLogedID: getUserId(),
      FiguID: figuID
    }
    return lastValueFrom(this.httpClient.patch(path, body))
  }

  async addFiguritaFaltante(figuID: number) {
    await this.addFigu(`${API_URL}/user/agregar-figurita-repetida`, figuID)
  }

  async addFiguritaRepetida(figuID: number) {
    await this.addFigu(`${API_URL}/user/agregar-figurita-faltante`, figuID)
  }

  private dataSubject = new Subject<UserUpdateInfoDTO>()
  data$: Observable<UserUpdateInfoDTO> = this.dataSubject.asObservable()

  updateInfoUser(userInfo: UserUpdateInfoDTO): void {
    this.dataSubject.next(userInfo)
  }
}
