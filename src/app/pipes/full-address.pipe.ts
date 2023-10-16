import {Pipe, PipeTransform} from '@angular/core'
import {PickupPointDTO} from '../dtos/pickup-point.dto'

@Pipe({
  name: 'fullAddress'
})
export class FullAddressPipe implements PipeTransform {
  transform(pickupPoint: PickupPointDTO): string {
    return `${pickupPoint.streetName} ${pickupPoint.streetNumber}`
  }
}
