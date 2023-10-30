import {Component, Input} from '@angular/core'
import { Market } from 'src/app/models/market/market.model'

@Component({
  selector: 'app-card-market',
  templateUrl: './card-market.component.html',
  styleUrls: ['./card-market.component.css']
})
export class CardMarketComponent {
  @Input() inputMarketCard!: Market
  marketCard!: Market

  ngOnInit() {
    this.marketCard = this.inputMarketCard
    this.getGeoLocalization()
  }

  /*
  Transforma la geoLocalizacion recibida en x: n.nnnn, y: m.mmmm
  */
  getGeoLocalization() {
    const geoLocation = this.marketCard.props.direccion.ubiGeografica.toString()
    const regex: RegExp = /-?\d+\.\d+/g

    const coords = geoLocation.match(regex) ?? []
    const transformCoords = coords.map((coord) => parseFloat(coord).toFixed(4))
    const [coordX, coordY] = transformCoords

    return `x: ${coordX}, y: ${coordY}`
  }
}
