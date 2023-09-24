import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-variantFilter',
  templateUrl: './variantFilter.component.html',
  styleUrls: ['../../../styles/input/input.css', './variantFilter.component.css']
})
export class VariantFilterComponent implements OnInit {
  constructor() { }

  title: string = 'Filtros'

  ngOnInit() {
  }

}
