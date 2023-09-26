import { Component, HostBinding, Input } from '@angular/core'

@Component({
  selector: 'app-c-field',
  templateUrl: './c-field.component.html',
  styleUrls: ['./c-field.component.css']
})
export class CFieldComponent {
  @HostBinding('class') className = 'app-input'
  @Input() label: string = ''
  @Input() placeholder: string = 'Ingrese un valor'
  @Input() type: string = 'text'
  @Input() name: string = ''
  @Input() class: string = ''
}
