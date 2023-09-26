import { Component, ContentChild } from '@angular/core'
import { VariantFilterComponent } from './variantFilter/variantFilter.component'
import { SortedByFilterComponent } from './sortedByFilter/sortedByFilter.component'

type FilterType = VariantFilterComponent | SortedByFilterComponent

@Component({
  selector: 'app-baseFilter',
  templateUrl: './baseFilter.component.html',
  styleUrls: ['../../styles/input/input.css', './baseFilter.component.css']
})
export class BaseFilterComponent {
  @ContentChild('childFilter') childFilter!: FilterType

  title!: string

  ngAfterContentInit(): void {
    if (this.childFilter) {
      this.title = this.childFilter.title
    }
  }
}
