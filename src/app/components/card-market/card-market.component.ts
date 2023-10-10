import { Component, OnInit } from '@angular/core'
import { PickupPoint } from 'src/app/models/pickupPoint/pickupPoint'
import { CardMarketService } from 'src/app/services/card-market.service'

@Component({
  selector: 'app-card-market',
  templateUrl: './card-market.component.html',
  styleUrls: ['./card-market.component.css']
})
export class CardMarketComponent implements OnInit {
  marketCards!: PickupPoint[]

  constructor(private cardMarketService: CardMarketService) {}

  //TODO:Puntos de ventas devuelve o kiosko o libreria, etc. Ver nombre de clase y respecto a eso
  //Automatizar el iconito en la vista

  ngOnInit() {
    this.getAllCards()
  }

  //TODO: Sacar Kiosko, libreria y supermercado del tipo de la clase obtenida

  async getAllCards() {
    this.marketCards = await this.cardMarketService.getAllCards()
  }
}
