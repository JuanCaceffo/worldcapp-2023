import {PickupPointDTO} from 'src/app/dtos/pickup-point.dto'

export class PickupPoint {
  constructor(public props: PickupPointDTO) {}

  static fromJson(cardJSON: PickupPointDTO): PickupPoint {
    return new PickupPoint(cardJSON)
  }
}
