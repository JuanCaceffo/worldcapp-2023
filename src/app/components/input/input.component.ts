import { Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @HostBinding('class') className = 'app-input'
  @Input() label: string = ''
  @Input() placeholder: string = 'Ingrese un valor'
  @Input() type: string = 'text'
  @Input() name: string = ''
  @Input() class: string = ''
}
