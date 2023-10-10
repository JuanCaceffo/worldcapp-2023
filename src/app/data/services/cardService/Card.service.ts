import {mockCardData} from './../../mocks/MockedCardDTO'
import {Injectable} from '@angular/core'
import {Figurita} from '../../models/cards/Figurita'

@Injectable({
  providedIn: 'root'
})
export class CardService {
  data = mockCardData

  getAllCards(): Figurita[] {
    return this.data.map<Figurita>((cardDTO) => Figurita.fromJson(cardDTO))
  }

  getCardById(id: number): Figurita | undefined {
    const card = this.data.find((card) => card.cardID == id)
    if (!card) return
    return Figurita.fromJson(card)
  }

  //idea para boton solicitud de card details
  /* solicitud de card: recibe el id del solicitante (debeira poder acceder a ese id si el user esta logeado) 
  + la card solicitada  */
}
