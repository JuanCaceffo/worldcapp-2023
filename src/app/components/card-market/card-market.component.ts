import { Component, OnInit } from '@angular/core'
import { PickupPoint } from 'src/app/models/pickupPoint/pickupPoint'

@Component({
  selector: 'app-card-market',
  templateUrl: './card-market.component.html',
  styleUrls: ['./card-market.component.css']
})
export class CardMarketComponent implements OnInit {
  marketCards!: PickupPoint[]

  ngOnInit() {
    //TODO: Sacar Kiosko de aca y ver en el back si es un tipo
    this.marketCards = [
      new PickupPoint('Kiosko La Scaloneta', 'Alpatacal 1234', 2, 3, 4)
    ]
  }
}
