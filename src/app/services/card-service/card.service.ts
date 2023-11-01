import {Injectable} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {HttpClient} from '@angular/common/http'
import {FiguritaDTO} from 'src/app/dtos/figurita.dto'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'
import {getUserId} from 'src/app/helpers/getUserId.helper'
import { CardSearch } from 'src/app/models/searchbar/searchbar'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpClient: HttpClient) {}

  async getCards(filter: CardSearch): Promise<Figurita[]> {
    const figuritasJSON = await lastValueFrom(
      this.cardData(`${API_URL}/figuritas/intercambiar/${getUserId()}`, filter)
    )
    return figuritasJSON.map((card) => Figurita.fromJson(card))
  }

  async getCollectibleFigus(filter: CardSearch): Promise<Figurita[]> {
    const figusJSON = await lastValueFrom(
      this.cardData(`${API_URL}/figuritas/figus-agregables`, filter)
    )
    return figusJSON.map((card) => Figurita.fromJson(card))
  }

  private cardData = (path: string, filter: CardSearch) =>
    this.httpClient.get<FiguritaDTO[]>(path, {params: filter.httpParams()})
}
