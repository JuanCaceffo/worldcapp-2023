import {Injectable} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {HttpClient} from '@angular/common/http'
import {FiguritaDTO} from 'src/app/dtos/figurita.dto'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'
import {getUserId} from 'src/app/helpers/getUserId.helper'
import { CardSearch } from 'src/app/interfaces/searchCriteria'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpClient: HttpClient) {}

  async getCards(criterio?: CardSearch): Promise<Figurita[]> {
    console.log(criterio)
    const figuritas = this.httpClient.get<FiguritaDTO[]>(
      `${API_URL}/figuritas/intercambiar/${getUserId()}?onFire=${criterio?.onFire}&esPromesa=${criterio?.esPromesa}&cotizacionInicial=${criterio?.cotizacionInicial}&cotizacionFinal=${criterio?.cotizacionFinal}&palabraClave=${criterio?.palabraClave}`
    )
    const figuritasJSON = await lastValueFrom(figuritas)
    return figuritasJSON.map((card) => Figurita.fromJson(card))
  }

  // search(key: string, endpoint: string){
  //   TODO pensar si hacemos mockitos o no y nos mandamos de lleno al cableado
  // }
}
