import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'
import { StoreSearch } from 'src/app/models/searchbar/searchbar'
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
    private cardMarketService: CardMarketService,
    public storeSearch: StoreSearch
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Sobres')
    this.getAll()
  }

  async getAll() {
    this.marketCards = await this.cardMarketService.getAllCards()
  }

  clickAction() {
    this.getAll()
  }
}
