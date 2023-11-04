import {Component, Input} from '@angular/core'
import { CardSearch } from 'src/app/models/searchbar/searchbar'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variant-filter.component.html',
  styleUrls: ['./variant-filter.component.css', '../base-filter.component.css']
})
export class VariantFilterComponent {
  @Input() filter:CardSearch = new CardSearch()

  onSubmit() {
    this.filter.checkMin()
  }  
}
