import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {lastValueFrom} from 'rxjs'
import {API_URL} from '../config'
import {getUserId} from 'src/app/helpers/getUserId.helper'
import {marketFilter} from 'src/app/models/searchbar/searchbar'
import {Market} from 'src/app/models/market/market.model'
import {MarketDTO} from 'src/app/dtos/market.dto'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  constructor(
    private httpClient: HttpClient,    
  ) {}
  filter = marketFilter  

  async getCards(): Promise<Market[]> {
    const marketJSON = await lastValueFrom(this.cardData())
    return marketJSON.map((pup) => Market.fromJson(pup))
  }

  private cardData = () =>
    this.httpClient.get<MarketDTO[]>(
      `${API_URL}/puntosDeVenta/${getUserId()}`,
      {params: this.filter.httpParams()}
    )
}
