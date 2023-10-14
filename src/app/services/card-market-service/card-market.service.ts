import {Injectable} from '@angular/core'
import {PickupPointDTO} from 'src/app/dtos/pickup-point.dto'
import {mockedCardMarket} from 'src/app/mocks/card-market.mock'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  marketCards!: PickupPointDTO[]

  async getAllCards(): Promise<PickupPoint[]> {
    return await mockedCardMarket.map<PickupPoint>((pup) =>
      PickupPoint.fromJson(pup)
    )
  }
}
