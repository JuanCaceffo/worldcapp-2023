import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {lastValueFrom} from 'rxjs'
import {PickupPointDTO as StoreDto} from 'src/app/dtos/pickup-point.dto'
import {PickupPoint} from 'src/app/models/pickup-point/pickup-point.model'
import {API_URL} from '../config'
import {getUserId} from 'src/app/helpers/getUserId.helper'
import {StoreSearch} from 'src/app/models/searchbar/searchbar'

@Injectable({
  providedIn: 'root'
})
export class CardMarketService {
  constructor(
    private httpClient: HttpClient,
    public storeSearch: StoreSearch
  ) {}
  marketCards!: StoreDto[]

  async getAllCards(): Promise<PickupPoint[]> {
    const pickupPointJSON = await lastValueFrom(this.cardData())
    return pickupPointJSON.map((pup) => PickupPoint.fromJson(pup))
  }

  private cardData = () =>
    this.httpClient.get<StoreDto[]>(
      `${API_URL}/puntosDeVenta/?id=${getUserId()}`,
      {params: this.storeSearch.httpParams()}
    )
}
