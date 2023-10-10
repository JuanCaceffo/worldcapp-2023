import { Injectable } from '@angular/core'
import { PickupPoint } from '../models/pickupPoint/pickupPoint'
import { CardMarketStub } from './servicesStubs/card-market-stub'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  async getAllCards(): Promise<PickupPoint[]> {
    return await [new CardMarketStub(), new CardMarketStub()]
  }
}
