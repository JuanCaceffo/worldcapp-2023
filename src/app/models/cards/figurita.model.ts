import {figuritaDTO} from '../../dtos/figurita.dto'
import {getUserId} from 'src/app/helpers/getUserId.helper'

export class Figurita {
  constructor(public props: figuritaDTO) {}

  static fromJson(cardJSON: figuritaDTO): Figurita {
    return new Figurita(cardJSON)
  }

  get isOwner() {
    const userLogedID = getUserId()
    return this.props.ownerID == userLogedID
  }

  get isWorldChampion() {
    return this.props.worldCups > 0
  }

  get birth() {
    return new Date(this.props.birth)
  }

  get ifIsLeader() {
    return this.props.isLeader ? 'Es lider' : 'No es lider'
  }

  get baseValoration() {
    return (
      this.props.initialValue *
      this.multiplierOnFire *
      this.multiplierEvenNumber *
      this.multiplierImpresion
    )
  }

  get multiplierEvenNumber() {
    return this.props.figureNumber! % 2 === 0 ? 1.1 : 1.0
  }

  get multiplierOnFire() {
    return this.props.isOnfire ? 1.2 : 1.0
  }

  get multiplierImpresion() {
    return this.props.levelOfImpresion === 'bajo' ? 1.0 : 0.85
  }

  get totalValoration() {
    return this.baseValoration + this.props.playerValoration
  }

  // AGREGADO POR PABLO SI ESTA OK BORRAR EL COMMENT
  get imageURL(): string {
    return `assets/images/card-img-${this.props.cardID}.jpg`
  }
}
