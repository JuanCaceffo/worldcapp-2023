import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {lastValueFrom} from 'rxjs'
import {PickupPointDTO} from 'src/app/dtos/pickup-point.dto'
// import {mockedCardMarket} from 'src/app/mocks/card-market.mock'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'
import {API_URL} from '../config'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  constructor(private httpClient: HttpClient) {}
  marketCards!: PickupPointDTO[]

  async getAllCards(): Promise<PickupPoint[]> {
    //TODO:Enviar correctamente el id de usuario
    const pickupPoint$ = this.httpClient.get<PickupPointDTO[]>(
      `${API_URL}/puntosDeVenta/?userId=0`
    )
    const pickupPointJSON = await lastValueFrom(pickupPoint$)
    console.log(pickupPointJSON)
    return pickupPointJSON.map((pup) => PickupPoint.fromJson(pup))
  }
}
