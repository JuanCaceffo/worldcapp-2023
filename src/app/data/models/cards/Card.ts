import { Dayjs } from 'dayjs'
import { CardDTO } from '../../dto/CardDTO.dto'
import { DATE_FORMATE } from './../../services/config'
import * as dayjs from 'dayjs'

/* interface CardProps extends Omit<CardDTO, 'birth'> {
  birth: Dayjs
} */
export class Card {
  //Preguntar por otra forma mas limpia de declarar los aprametros
  constructor(
    public figureNumber?: number,
    public isOnfire?: boolean,
    public isPromise?: boolean,
    public initialValue: number = 0,
    public multiplierImpresion: number = 0,
    public multiplierOnFire: number = 0,
    public mulitplierEvenNumber: number = 0,
    //player
    public name?: string,
    public surname?: string,
    public weight?: number,
    public height?: number,
    public shirtNumber?: number,
    public birth?: Dayjs,
    public age?: number,
    public nationalTeam?: string,
    public positon?: string,
    public quote?: number //player
  ) {}

  static fromJson(cardJSON: CardDTO): Card {
    const caca = Object.assign(new Card(), cardJSON, {
      birth: dayjs(cardJSON.birth, DATE_FORMATE)
    })
    console.log(caca)
    return caca
  }

  get baseValoration() {
    return (
      this.initialValue *
      this.multiplierOnFire *
      this.mulitplierEvenNumber *
      this.multiplierImpresion
    )
  }
}
