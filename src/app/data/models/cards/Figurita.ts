import {CardDTO} from '../../dto/CardDTO.dto'

const INITIAL_VALUE = 100
export class Figurita {
  //Preguntar por otra forma mas limpia de declarar los parametros
  constructor(
    public cardID?: number,
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
    public debutYear?: number,
    public worldCups?: number,
    public confederation?: string,
    public confederationWorldCups?: number,
    public isLeader?: boolean,
    //player
    public owner?: string
  ) {}

  static fromJson(cardJSON: CardDTO): Figurita {
    return Object.assign(new Figurita(), cardJSON, {
      birth: new Date(cardJSON.birth)
    })
  }

  get ifIsLeader() {
    return this.isLeader ? 'Es lider' : 'No es lider'
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
    if (this.levelOfImpresion === 'bajo') {
      return 1.0
    } else {
      return 0.85
    }
  }

  get totalValoration() {
    return this.baseValoration + this.playerValoration!
  }
}
