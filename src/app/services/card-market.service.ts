import { Injectable } from '@angular/core'
import { CardMarketStub } from './servicesStubs/card-market-stub'
// import { PickupPoint, PickupPoint2 } from '../models/pickupPoint/pickupPoint'
import { IPickupPoint } from '../interfaces/pickupPoint'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  marketCards!: IPickupPoint[]

  // constructor() {
  //   this.marketCards = [
  //     new PickupPoint('Kiosko La Scaloneta', 'Alpatacal 1234', 1, 3, 2, 4),
  //     new PickupPoint('Kiosko LaLALA', 'Alpatacal 1234', 1, 3, 2, 4),
  //     new PickupPoint('Kiosko La CACHO', 'Alpatacal 1234', 1, 1, 3, 4),
  //     new PickupPoint2('Kiosko La Scaloneta', 'Alpatacal 1234', 1, 3, 4),
  //     new PickupPoint('Kiosko LaLALA', 'Alpatacal 1234', 1, 3, 4, 2),
  //     new PickupPoint('Kiosko La CACHITO', 'Alpatacal 1234', 1, 3, 3, 4)
  //   ]
  // }

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

  // buscarMarket(): IPickupPoint[] {
  //   return this.marketCards
  // }
}
