import { Component } from '@angular/core'
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
  title: string = 'Filtros'
  from = 0
  to = 0
  onFire = false
  isPromise = false

  // ngOnInit() {
  //   this.filter = new VariantFilter(2, 3, true, true)
  //   this.filter.getFigure()
  // }
}
