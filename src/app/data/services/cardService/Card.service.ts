import { mockCardData } from './../../mocks/MockedCardDTO'
import { Injectable } from '@angular/core'
import { Card } from '../../models/cards/Card'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  data = mockCardData

  getAllCards(): Card[] {
    return this.data.map<Card>((cardDTO) => Card.fromJson(cardDTO))
  }

  /* getCardById(id: number){

  } */
}
