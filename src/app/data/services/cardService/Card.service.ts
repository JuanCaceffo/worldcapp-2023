import { mockCardData } from './../../mocks/MockedCardDTO'
import { Injectable } from '@angular/core'
import { Card } from '../../models/cards/Card'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  constructor() {}

  getAllCards() {
    const data = mockCardData
    return data.map((card) => {
      Card.fromJson(card)
    })
  }

  /* getCardById(id: number){

  } */
}
