import {mockCardData} from './../../mocks/MockedCardDTO'
import {Injectable} from '@angular/core'
import {Figurita} from '../../models/cards/Figurita'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  getAllCards(): Figurita[] {
    return mockCardData.map<Figurita>((cardDTO) => Figurita.fromJson(cardDTO))
  }

  getCardById(id: number): Figurita | undefined {
    const card = mockCardData.find((card) => card.cardID == id)
    if (!card) return
    return Figurita.fromJson(card)
  }

  // search(key: string, endpoint: string){
  //   TODO pensar si hacemos mockitos o no y nos mandamos de lleno al cableado
  // }
}
