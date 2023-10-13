import {Injectable} from '@angular/core'
import {PickupPointDTO} from '../interfaces/pickupPointDTO'
import {MockedCardMarket} from './mocks/card-market.mock'
import {PickupPoint} from '../models/pickupPoint/pickupPoint'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  marketCards!: PickupPointDTO[]

  async getAllCards(): Promise<PickupPoint[]> {
    return await MockedCardMarket.map<PickupPoint>((pup) =>
      PickupPoint.fromJson(pup)
    )
  }
}
