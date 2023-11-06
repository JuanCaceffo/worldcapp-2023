import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-button-add-card',
  templateUrl: './button-add-card.component.html',
  styleUrls: ['./button-add-card.component.css']
})
export class ButtonAddCardComponent {
  //TODO: cambiar string por un tipo de urls que puede recibir el boton
  @Input() urlToNavigate!: string
}
