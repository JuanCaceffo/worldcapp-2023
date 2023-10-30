import {Pipe, PipeTransform} from '@angular/core'
import { MarketDTO } from '../dtos/market.dto'

@Pipe({
  name: 'fullAddress'
})
export class FullAddressPipe implements PipeTransform {
  transform(pickupPoint: MarketDTO): string {
    return `${pickupPoint.direccion.calle} ${pickupPoint.direccion.altura}`
  }
}
