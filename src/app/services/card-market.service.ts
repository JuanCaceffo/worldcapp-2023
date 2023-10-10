import { Injectable } from '@angular/core'
import { CardMarketStub } from './servicesStubs/card-market-stub'
import { IPickupPoint } from '../interfaces/pickupPoint'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  marketCards!: IPickupPoint[]

  async getAllCards(): Promise<IPickupPoint[]> {
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
