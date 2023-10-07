import { Component, OnInit } from '@angular/core'
import { PickupPoint } from 'src/app/models/pickupPoint/pickupPoint'

@Component({
  selector: 'app-card-market',
  templateUrl: './card-market.component.html',
  styleUrls: ['./card-market.component.css']
})
export class CardMarketComponent implements OnInit {
  marketCards!: PickupPoint[]

  //TODO:Puntos de ventas devuelve o kiosko o lirebria, etc. Ver nombre de clase y respecto a eso
  //Automatizar el iconito en la vista

  ngOnInit() {
    //TODO: Sacar Kiosko de aca y ver en el back si es un tipo
    this.marketCards = [
      new PickupPoint('Kiosko La Scaloneta', 'Alpatacal 1234', 1, 3, 4),
      new PickupPoint('Kiosko LaLALA', 'Alpatacal 1234', 1, 3, 4),
      new PickupPoint('Kiosko La CACHO CACHEFFO,a', 'Alpatacal 1234', 1, 3, 4)
    ]
  }
}
