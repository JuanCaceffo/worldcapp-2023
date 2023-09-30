import { Dayjs } from 'dayjs'
import { CardDTO } from '../../dto/CardDTO.dto'
import { DATE_FORMATE } from '../../services/config'
import * as dayjs from 'dayjs'

interface CardProps extends Omit<CardDTO, 'birth'> {
  birth: Dayjs
}
export class Card {
  //Preguntar si es posible agregar las propiedades de esta forma
  public cardProps!: CardProps

  static fromJson(cardJSON: CardDTO): Card {
    return Object.assign(new Card(), cardJSON, {
      brith: dayjs(cardJSON.birth, DATE_FORMATE)
    })
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
