import { CardDTO } from '../../dto/CardDTO.dto'

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
