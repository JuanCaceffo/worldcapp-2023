type Player = {
  name: string
  weight: number
  height: number
  shirtNumber: number
  birth: string
  nationalTeam: string
  positon: string
  quote: number
}
interface CardDTO {
  figureNumber: number
  isOnfire: boolean
  impersionValue: number
  player: Player
}

export class Card {
  cardProps?: CardDTO

  static fromJson(cardJSON: CardDTO): Card {
    return Object.assign(new Card(), cardJSON)
  }
}
