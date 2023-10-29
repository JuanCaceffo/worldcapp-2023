import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-button-add-card',
  templateUrl: './button-add-card.component.html',
  styleUrls: ['./button-add-card.component.css']
})
export class ButtonAddCardComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  //TODO: camibiar stirng por un tipo de urls que puede recibir el boton
  @Input() urlToNavigate!: string
}
