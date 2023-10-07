import { mockCardData } from './../../mocks/MockedCardDTO'
import { Injectable } from '@angular/core'
import { Figurita } from '../../models/cards/Card'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  data = mockCardData

  getAllCards(): Figurita[] {
    return this.data.map<Figurita>((cardDTO) => Figurita.fromJson(cardDTO))
  }

  /* getCardById(id: number){

  } */
}
