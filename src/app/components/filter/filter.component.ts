import { Component } from '@angular/core'

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['../../styles/input/input.css','./filter.component.css']
})

export class FilterComponent {
  type: string = 'variant'
}
