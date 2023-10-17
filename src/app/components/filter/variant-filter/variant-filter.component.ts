import {Component, Input} from '@angular/core'
// import { VariantFilter } from 'src/app/models/filter/variantFilter/variantFilter.model'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variant-filter.component.html',
  styleUrls: [
    '../../../styles/input/input.css',
    '../base-filter.component.css',
    './variant-filter.component.css'
  ]
})
export class VariantFilterComponent {
  title = 'Filtros'
  from = '0'
  to = '0'
  @Input() onFire = false
  isPromise = false

  setTestId = (name: string): string => name
}
