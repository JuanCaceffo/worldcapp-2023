import {Injectable} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {HttpClient} from '@angular/common/http'
import {FiguritaDTO} from 'src/app/dtos/figurita.dto'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'
import {getUserId} from 'src/app/helpers/getUserId.helper'
import {HttpParams} from '@angular/common/http'
import { CardSearch } from 'src/app/models/searchbar/searchbar'
import { CardSearchProps } from 'src/app/interfaces/searchCriteria'

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private httpClient: HttpClient, public cardSearch: CardSearch) {}

  async getCards(): Promise<Figurita[]> {        
    const figuritas = this.httpClient.get<FiguritaDTO[]>(
      `${API_URL}/figuritas/intercambiar/${getUserId()}`, {params: this.mappingHTTP()}
    )
    const figuritasJSON = await lastValueFrom(figuritas)
    // console.log(figuritasJSON)
    return figuritasJSON.map((card) => Figurita.fromJson(card))
  }

  mappingHTTP(): HttpParams{
    let httpParams = new HttpParams()
    Object.keys(this.cardSearch).forEach( key => {            
      httpParams = httpParams.set(key, this.cardSearch[key as keyof CardSearchProps].toString())            
    })    
    return httpParams
  }
}
