import { Component, OnInit } from '@angular/core'
import { VariantFilter } from 'src/app/data/models/filter/variantFilter/variantFilter.model'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variantFilter.component.html',
  styleUrls: [
    '../../../styles/input/input.css',
    '../baseFilter.component.css',
    './variantFilter.component.css'
  ]
})
export class VariantFilterComponent implements OnInit {
  filter!: VariantFilter
  title: string = 'Filtros'

  ngOnInit() {
    this.filter = new VariantFilter()
    this.filter.getFigure()
  }
}
