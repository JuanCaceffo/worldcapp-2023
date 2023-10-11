import {figuritaDTO} from '../../dto/figurita.dto'

const INITIAL_VALUE = 100

export class Figurita {
  constructor(public props: figuritaDTO) {}

  static fromJson(cardJSON: figuritaDTO): Figurita {
    return new Figurita(cardJSON)
  }

  get birth() {
    return new Date(this.props.birth)
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
    if (this.props.figureNumber! % 2 === 0) {
      return 1.1
    } else {
      return 1.0
    }
  }

  get multiplierOnFire() {
    if (this.props.isOnfire === true) {
      return 1.2
    } else {
      return 1.0
    }
  }

  get multiplierImpresion() {
    if (this.props.levelOfImpresion === 'low') {
      return 1.0
    } else {
      return 0.85
    }
  }

  get totalValoration() {
    return this.baseValoration + this.props.playerValoration
  }

  // AGREGADO POR PABLO SI ESTA OK BORRAR EL COMMENT
  get imageURL(): string {
    return `assets/images/card-img-${this.props.cardID}.jpg`
  }
}
