import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-sortedByFilter',
  templateUrl: './sortedByFilter.component.html',
  styleUrls: ['../../../styles/input/input.css', './sortedByFilter.component.css']
})
export class SortedByFilterComponent implements OnInit {
  constructor() { }
  
  title: string = 'Ordernar Por'

  ngOnInit() {
  }

}
