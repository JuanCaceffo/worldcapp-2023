import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Market} from 'src/app/models/market/market.model'
import {StoreSearch} from 'src/app/models/searchbar/searchbar'
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
  filter = new StoreSearch

  ngOnInit() {
    this.titleService.setTitle('Sobres')
    this.getAll()
  }

  async getAll() {
    this.marketCards = await this.cardMarketService.getCards(this.filter)
  }

  clickAction() {
    this.getAll()
  }
}
