import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {lastValueFrom} from 'rxjs'
import {API_URL} from '../config'
import {getUserId} from 'src/app/helpers/userSessionStorage.helper'
import {Market} from 'src/app/models/market/market.model'
import {MarketDTO} from 'src/app/dtos/market.dto'
import {StoreSearch} from 'src/app/models/searchbar/searchbar'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  constructor(private httpClient: HttpClient) {}

  async getCards(filter: StoreSearch): Promise<Market[]> {
    const marketJSON = await lastValueFrom(this.cardData(filter))
    return marketJSON.map((pup) => Market.fromJson(pup))
  }

  private cardData = (filter: StoreSearch) =>
    this.httpClient.get<MarketDTO[]>(
      `${API_URL}/puntos-de-venta/usuario/${getUserId()}`,
      {params: filter.httpParams()}
    )
}
