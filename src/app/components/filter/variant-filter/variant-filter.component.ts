import {CardSearch} from 'src/app/models/searchbar/searchbar'
import {Component} from '@angular/core'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variant-filter.component.html',
  styleUrls: ['./variant-filter.component.css', '../base-filter.component.css']
})
export class VariantFilterComponent {
  constructor(public cardSearch: CardSearch) {}

  onSubmit() {
    this.cardSearch.checkMin()
  }
}
