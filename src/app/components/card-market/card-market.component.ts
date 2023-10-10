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

  ngOnInit() {
    this.getAllCards()
  }

  //TODO: Devolver el tipo de class (Kiosko, libreria o supermercado) desde el back

  async getAllCards() {
    this.marketCards = await this.cardMarketService.getAllCards()
  }
}
