import { Injectable } from '@angular/core'
import { PickupPoint, PickupPoint2 } from '../models/pickupPoint/pickupPoint'
import { IPickupPoint } from '../interfaces/pickupPoint'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  marketCards!: IPickupPoint[]

  constructor() {
    this.marketCards = [
      new PickupPoint('Kiosko La Scaloneta', 'Alpatacal 1234', 1, 3, 4),
      new PickupPoint('Kiosko LaLALA', 'Alpatacal 1234', 1, 3, 4),
      new PickupPoint('Kiosko La CACHO CACHEFFO,a', 'Alpatacal 1234', 1, 3, 4),
      new PickupPoint2('Kiosko La Scaloneta', 'Alpatacal 1234', 1, 3, 4),
      new PickupPoint('Kiosko LaLALA', 'Alpatacal 1234', 1, 3, 4),
      new PickupPoint('Kiosko La CACHO CACHEFFO,a', 'Alpatacal 1234', 1, 3, 4)
    ]
  }

  buscarMarket(): IPickupPoint[]{
    return this.marketCards
  }
}
