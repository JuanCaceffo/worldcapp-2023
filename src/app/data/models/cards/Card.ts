import { CardDTO } from '../../dto/CardDTO.dto'

/* interface CardProps extends Omit<CardDTO, 'birth'> {
  birth: Dayjs
} */
const INITIAL_VALUE = 100
export class Figurita {
  //Preguntar por otra forma mas limpia de declarar los parametros
  constructor(
    public figureNumber?: number,
    public isOnfire?: boolean,
    public isPromise?: boolean,
    public playerValoration?: number,
    public levelOfImpresion?: string,
    //player
    public name?: string,
    public surname?: string,
    public weight?: number,
    public height?: number,
    public shirtNumber?: number,
    public birth?: Date,
    public age?: number,
    public nationalTeam?: string,
    public positon?: string,
    public quote?: number,
    //player
    public owner?: string
  ) {}

  static fromJson(cardJSON: CardDTO): Figurita {
    return Object.assign(new Figurita(), cardJSON)
  }

  get baseValoration() {
    return (
      INITIAL_VALUE *
      this.multiplierOnFire *
      this.multiplierEvenNumber *
      this.multiplierImpresion
    )
  }

  get multiplierEvenNumber() {
    if (this.figureNumber! % 2 === 0) {
      return 1.1
    } else {
      return 1.0
    }
  }

  get multiplierOnFire() {
    if (this.isOnfire === true) {
      return 1.2
    } else {
      return 1.0
    }
  }

  get multiplierImpresion() {
    if (this.levelOfImpresion === 'low') {
      return 1.0
    } else {
      return 0.85
    }
  }

  get totalValoration() {
    return this.baseValoration + this.playerValoration!
  }
}
