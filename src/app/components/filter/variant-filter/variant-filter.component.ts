import {Component, OnChanges, Output, SimpleChanges} from '@angular/core'
import { CardSearch } from 'src/app/interfaces/searchCriteria'
// import { VariantFilter } from 'src/app/models/filter/variantFilter/variantFilter.model'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variant-filter.component.html',
  styleUrls: [
    '../base-filter.component.css',
    './variant-filter.component.css'
  ]
})
export class VariantFilterComponent implements OnChanges {
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['onFire']){ console.log("pepe", this.onFire) }
  }

  @Output() filtro!: CardSearch
  title = 'Filtros'
  from = 0
  to = 0
  min = 0
  onFire = false
  isPromise = false  

  // toggleOnFire(){
  //   this.onFire = !this.onFire
  // }

  onFromChange (newValue: number) {    
    this.min = newValue
    if ( newValue > this.to) {
      this.to = newValue      
    }
  }
}
