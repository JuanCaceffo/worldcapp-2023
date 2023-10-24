import {Component, EventEmitter, Output} from '@angular/core'
import { CardSearch } from 'src/app/interfaces/searchCriteria'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variant-filter.component.html',
  styleUrls: ['./variant-filter.component.css', '../base-filter.component.css']
})
export class VariantFilterComponent {
  filterData = {
    onFire: false,
    esPromesa: false,
    cotizacionInicial: 0,
    cotizacionFinal: 0
  }
  min = 0

  @Output() emitter = new EventEmitter<CardSearch>()

  // onFromChange (newValue: number) {
  //   this.min = newValue
  //   if (newValue > this.filterData.to) {
  //     this.filterData.to = newValue
  //   }
  // }

  fromToVerificaition() { return this.filterData.cotizacionFinal < this.filterData.cotizacionInicial }
  setValueMin() { this.min = this.filterData.cotizacionInicial }
  
  onSubmit() {
    if (this.fromToVerificaition()) {
      this.filterData.cotizacionFinal = this.filterData.cotizacionInicial
    }
    this.setValueMin()
    this.emitter.emit(this.filterData)
  }
}
