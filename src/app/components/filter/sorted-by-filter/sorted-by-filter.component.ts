import {Component} from '@angular/core'
@Component({
  selector: 'app-sortedByFilter',
  templateUrl: './sorted-by-filter.component.html',
  styleUrls: [
    '../../../styles/input/input.css',
    './sorted-by-filter.component.css'
  ]
})
export class SortedByFilterComponent {
  title: string = 'Ordernar Por'
  closest = true
  cheapest = false
  packQuantity = false
  closestOnly = false

  setTestId = (name: string): string => name
}
