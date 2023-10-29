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

  constructor(private httpClient: HttpClient, public cardSearch: CardSearch) {}

  async getCards(): Promise<Figurita[]> {               
    const figuritasJSON = await lastValueFrom(this.cardData())    
    return figuritasJSON.map((card) => Figurita.fromJson(card))
  }

  private cardData = () => this.httpClient.get<FiguritaDTO[]>(`${API_URL}/figuritas/intercambiar/${getUserId()}`, {params: this.cardSearch.httpParams()})
}
