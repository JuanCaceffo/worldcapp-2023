import { Component, Input } from '@angular/core'
// import { VariantFilter } from 'src/app/models/filter/variantFilter/variantFilter.model'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variantFilter.component.html',
  styleUrls: [
    '../../../styles/input/input.css',
    '../baseFilter.component.css',
    './variantFilter.component.css'
  ]
})
export class VariantFilterComponent {
  // filter!: VariantFilter
  title = 'Filtros'
  from = '0'
  to = '0'
  @Input() onFire = false
  isPromise = false

  // ngOnInit() {
  //   this.filter = new VariantFilter()
  //   this.filter.getFigure()
  // }
  setTestId = (name:string): string => name   
}
