import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {lastValueFrom} from 'rxjs'
import {PickupPointDTO} from 'src/app/dtos/pickup-point.dto'
// import {mockedCardMarket} from 'src/app/mocks/card-market.mock'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'
import {API_URL} from '../config'
import {UserService} from '../user-service/user.service'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  constructor(private httpClient: HttpClient) {}
  marketCards!: PickupPointDTO[]

  async getAllCards(): Promise<PickupPoint[]> {
    const pickupPoint$ = this.httpClient.get<PickupPointDTO[]>(
      `${API_URL}/puntosDeVenta/?userId=${UserService.userLogedID}`
    )
    const pickupPointJSON = await lastValueFrom(pickupPoint$)
    return pickupPointJSON.map((pup) => PickupPoint.fromJson(pup))
  }
}
