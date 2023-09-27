/*
fun valoracionBase() = valorInicial * multiplicadorOnFire() *
 multiplicadorCartaPar() * cantidadImpresa.afectaValorEn
*/
type Player = {
  name: string
  surname: string
  weight: number
  height: number
  shirtNumber: number
  birth: string
  age: number
  nationalTeam: string
  positon: string
  quote: number
}
interface CardDTO {
  figureNumber: number
  isOnfire: boolean
  player: Player
  initialValue: number
  multiplierImpresion: number
  multiplierOnFire: number
  mulitplierEvenNumber: number
}

export class Card {
  constructor(public cardProps: CardDTO) {}

  static fromJson(cardJSON: CardDTO): Card {
    return new Card(cardJSON)
  }

  get baseValoration() {
    const props = this.cardProps
    return (
      props.initialValue *
      props.multiplierOnFire *
      props.mulitplierEvenNumber *
      props.multiplierImpresion
    )
  }
}
