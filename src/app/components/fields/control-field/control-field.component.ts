import { InputFieldProps } from 'src/app/interfaces/field'
import { Component } from '@angular/core'
import { InputFieldComponent } from '../input-field/input-field.component'
import { InputType } from '../field.component'

@Component({
  selector: 'app-control-field',
  templateUrl: './control-field.component.html',
  styleUrls: ['../field.component.css', './control-field.component.css']
})
export class ControlFieldComponent
  extends InputFieldComponent
  implements InputFieldProps
{
  constructor() {
    super()
  }

  override cssVariant(): InputType {
    return this.type === 'checkbox'
      ? 'field--checkbox'
      : this.type === 'radio'
        ? 'field--radio'
        : ''
  }

  override cssClass = (): string => super.cssClass() + this.cssVariant()
}
