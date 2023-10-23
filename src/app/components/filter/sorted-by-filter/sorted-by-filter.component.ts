import {Component} from '@angular/core'
@Component({
  selector: 'app-sortedByFilter',
  templateUrl: './sorted-by-filter.component.html',
  styleUrls: ['./sorted-by-filter.component.css']
})
export class SortedByFilterComponent {
  title: string = 'Ordernar Por'
  chosenFilter: string = 'Menor Distancia'
  opciones = [
    'Menor Distancia',
    'Más Barato',
    'Más Sobres',
    'Sólo más Cercanos'
  ]
}
