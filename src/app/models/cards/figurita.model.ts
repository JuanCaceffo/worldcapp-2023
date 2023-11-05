import {FiguritaDTO} from '../../dtos/figurita.dto'
import {getUserId} from 'src/app/helpers/userSessionStorage.helper'

export class Figurita {
  constructor(public props: FiguritaDTO) {}

  static fromJson(cardJSON: FiguritaDTO): Figurita {
    return new Figurita(cardJSON)
  }

  get isOwner() {
    return this.props.idUsuario === getUserId()
  }

  get hasAssignedUser() {
    return this.props.idUsuario > -1
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
      this.props.valorBase *
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
    return `assets/images/card-img-${this.props.numero}.jpg`
  }
}
