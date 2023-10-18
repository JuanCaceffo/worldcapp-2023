import {Component, Input} from '@angular/core'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'

@Component({
  selector: 'app-card-market',
  templateUrl: './card-market.component.html',
  styleUrls: ['./card-market.component.css']
})
export class CardMarketComponent {
  @Input() inputMarketCard!: PickupPoint
  marketCard!: PickupPoint

  getGeoLocalization() {}

  ngOnInit() {
    this.marketCard = this.inputMarketCard
  }
}
