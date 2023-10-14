import {Component, ContentChild} from '@angular/core'
import {VariantFilterComponent} from './variant-filter/variant-filter.component'
import {SortedByFilterComponent} from './sorted-by-filter/sorted-by-filter.component'

type FilterType = VariantFilterComponent | SortedByFilterComponent

@Component({
  selector: 'app-baseFilter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['../../styles/input/input.css', './base-filter.component.css']
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
