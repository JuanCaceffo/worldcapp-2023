import {figuritaDTO} from '../../dtos/figurita.dto'

const INITIAL_VALUE = 100

export class Figurita {
  constructor(public props: figuritaDTO) {}

  static fromJson(cardJSON: figuritaDTO): Figurita {
    return new Figurita(cardJSON)
  }

  get isWorldChampion() {
    return this.props.copasDelMundo > 0
  }

  get birth() {
    return new Date(this.props.fechaNac)
  }

  get ifIsLeader() {
    return this.props.esLider ? 'Es lider' : 'No es lider'
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
    return this.props.numero! % 2 === 0 ? 1.1 : 1.0
  }

  get multiplierOnFire() {
    return this.props.onFire ? 1.2 : 1.0
  }

  get multiplierImpresion() {
    return this.props.nivelImpresion === 'bajo' ? 1.0 : 0.85
  }

  get totalValoration() {
    return this.baseValoration + this.props.valoracion
  }

  // AGREGADO POR PABLO SI ESTA OK BORRAR EL COMMENT
  get imageURL(): string {
    return `assets/images/card-img-${this.props.id}.jpg`
  }
}
