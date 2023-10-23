import {Component} from '@angular/core'
// import { VariantFilter } from 'src/app/models/filter/variantFilter/variantFilter.model'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variant-filter.component.html',
  styleUrls: [
    '../base-filter.component.css',
    './variant-filter.component.css'
  ]
})
export class VariantFilterComponent {
  title = 'Filtros'
  from = 0
  to = 0
  min = 0
  onFire = false
  isPromise = false  

  onFromChange (newValue: number) {    
    this.min = newValue
    if ( newValue > this.to) {
      this.to = newValue      
    }
  }
}
