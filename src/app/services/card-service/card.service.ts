import {mockCardData} from 'src/app/mocks/card.mock'
import {Injectable} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'

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
}
