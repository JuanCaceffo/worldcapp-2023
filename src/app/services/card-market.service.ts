import { Injectable } from '@angular/core'
import { CardMarketStub } from './servicesStubs/card-market-stub'
import { PickupPointDTO } from '../interfaces/pickupPointDTO'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  marketCards!: PickupPointDTO[]

  async getAllCards(): Promise<PickupPointDTO[]> {
    return await [
      new CardMarketStub(),
      new CardMarketStub(),
      new CardMarketStub(),
      new CardMarketStub(),
      new CardMarketStub(),
      new CardMarketStub()
    ]
  }
}
