import {Injectable} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {HttpClient} from '@angular/common/http'
import {FiguritaDTO} from 'src/app/dtos/figurita.dto'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'
import {getUserId} from 'src/app/helpers/getUserId.helper'
import {cardFilter} from 'src/app/models/searchbar/searchbar'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpClient: HttpClient) {}
  filter = cardFilter

  async getCards(): Promise<Figurita[]> {
    const figuritasJSON = await lastValueFrom(
      this.cardData(`${API_URL}/figuritas/intercambiar/${getUserId()}`)
    )
    return figuritasJSON.map((card) => Figurita.fromJson(card))
  }

  async getCollectibleFigus(): Promise<Figurita[]> {
    const figusJSON = await lastValueFrom(
      this.cardData(`${API_URL}/figuritas/figus-agregables`)
    )
    return figusJSON.map((card) => Figurita.fromJson(card))
  }

  private cardData = (path: string) =>
    this.httpClient.get<FiguritaDTO[]>(path, {params: this.filter.httpParams()})
}
