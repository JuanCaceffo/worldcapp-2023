import {mockCardData} from 'src/app/mocks/card.mock'
import {Injectable} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import { HttpClient } from '@angular/common/http'
import { FiguritaDTO } from 'src/app/dtos/figurita.dto'
import {API_URL} from '../config'
import {lastValueFrom} from 'rxjs'
import { getUserId } from 'src/app/helpers/getUserId.helper'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor(private httpClient: HttpClient) {}
  figuritas: FiguritaDTO[] = []

  async getAllCards(): Promise<Figurita[]> {
    const figuritas = this.httpClient.get<FiguritaDTO[]>(
      `${API_URL}/figuritas/intercambiar/${getUserId()}`
    )
    const figuritasJSON = await lastValueFrom(figuritas)
    return figuritasJSON.map((card) => Figurita.fromJson(card))
  }

  getCardById(id: number): Figurita | undefined {
    const card = mockCardData.find((card) => card.id == id)
    if (!card) return
    return Figurita.fromJson(card)
  }

  // search(key: string, endpoint: string){
  //   TODO pensar si hacemos mockitos o no y nos mandamos de lleno al cableado
  // }
}
