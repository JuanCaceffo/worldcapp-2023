import { ControlFieldProps } from 'src/app/interfaces/field'
import { Component, Input } from '@angular/core'
import { FieldComponent, InputType } from '../field.component'

@Component({
  selector: 'app-control-field',
  templateUrl: './control-field.component.html',
  styleUrls: ['../field.component.css', './control-field.component.css']
})
export class ControlFieldComponent
  extends FieldComponent
  implements ControlFieldProps
{  
  @Input() type: string = 'checkbox'
  @Input() checked = false

  override cssVariant = (): InputType =>
    this.type === 'radio' ? 'field--radio' : 'field--checkbox'

  //Piso el cssClass para que pierda las clases
  override cssClass(): string {
    return this.cssVariant()
  }
}
