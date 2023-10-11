import { Component, Input } from '@angular/core'
import { PickupPoint } from 'src/app/models/pickupPoint/pickupPoint'

@Component({
  selector: 'app-card-market',
  templateUrl: './card-market.component.html',
  styleUrls: ['./card-market.component.css']
})
export class CardMarketComponent {
  @Input() inputMarketCard!: PickupPoint
  marketCard: PickupPoint = this.inputMarketCard

  ngOnInit() {
    this.marketCard = this.inputMarketCard
  }

  //TODO: Devolver el tipo de class (Kiosko, libreria o supermercado) desde el back
}
