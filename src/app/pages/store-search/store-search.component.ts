import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import { Market } from 'src/app/models/market/market.model'
import { marketFilter } from 'src/app/models/searchbar/searchbar'
import {CardMarketService} from 'src/app/services/card-market-service/card-market.service'

@Component({
  selector: 'app-store-search',
  templateUrl: './store-search.component.html',
  styleUrls: ['./store-search.component.css']
})
export class StoreSearchComponent {
  constructor(
    private titleService: Title,
    private cardMarketService: CardMarketService,    
  ) {}
  marketCards: Array<Market> = []
  filter = marketFilter

  ngOnInit() {
    this.titleService.setTitle('Sobres')
    this.getAll()
  }

  ngOnDestroy() {
    this.filter.resetFilter()
  }

  async getAll() {
    this.marketCards = await this.cardMarketService.getCards()
  }

  clickAction() {
    this.getAll()
  }
}
