import {Component, Input} from '@angular/core'
import { toParam } from 'src/app/helpers/string'
import { StoreSearch } from 'src/app/models/searchbar/searchbar'

@Component({
  selector: 'app-sortedByFilter',
  templateUrl: './sorted-by-filter.component.html',
  styleUrls: ['./sorted-by-filter.component.css','../base-filter.component.css']
})
export class SortedByFilterComponent {  
  @Input() filter = new StoreSearch
  
  options = [
    'Menor Distancia',
    'Más Barato',
    'Más Sobres',
    'Sólo más Cercanos'
  ]

  normalizedOption = (value:string) => toParam(value)
}
