import { InputFieldProps } from 'src/app/interfaces/field'
import { Component, Input } from '@angular/core'
import { FieldComponent, InputType } from '../field.component'

@Component({
  selector: 'app-control-field',
  templateUrl: './control-field.component.html',
  styleUrls: ['../field.component.css', './control-field.component.css']
})
export class ControlFieldComponent
  extends FieldComponent
  implements InputFieldProps
{
  @Input() type = 'checkbox'

  constructor() {
    super()
  }
  placeholder?: string | undefined
  error?: string | undefined

  override cssVariant(): InputType {
    return this.type === 'radio' ? 'field--radio' : 'field--checkbox'
  }

  //Piso el cssClass para que pierda las clases
  override cssClass(): string {
    return this.cssVariant()
  }
}
