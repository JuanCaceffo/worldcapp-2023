import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'
import {CardMarketService} from 'src/app/services/card-market-service/card-market.service'

@Component({
  selector: 'app-store-search',
  templateUrl: './store-search.component.html',
  styleUrls: ['./store-search.component.css']
})
export class StoreSearchComponent {
  marketCards: Array<PickupPoint> = []
  searchValue?: string | null

  constructor(
    private titleService: Title,
    private cardMarketService: CardMarketService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Sobres')
    this.getAllCards()
  }

  async getAllCards() {
    this.marketCards = await this.cardMarketService.getAllCards()
  }

  clickAction() {}
}
