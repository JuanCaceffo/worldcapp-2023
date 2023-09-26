import { Component, OnInit } from '@angular/core'
import { SortedByFilter } from 'src/app/models/filter/sortedByFilter/sortedByFilter.model'

@Component({
  selector: 'app-sortedByFilter',
  templateUrl: './sortedByFilter.component.html',
  styleUrls: ['../../../styles/input/input.css', './sortedByFilter.component.css']
})
export class SortedByFilterComponent implements OnInit {
  filter!: SortedByFilter  
  title: string = 'Ordernar Por'

  ngOnInit() {
    this.filter = new SortedByFilter()
    this.filter.getFigure()
  }

}
