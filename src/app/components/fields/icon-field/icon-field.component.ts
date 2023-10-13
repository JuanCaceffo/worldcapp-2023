import { IconFieldProps } from './../../../interfaces/field'
import { InputFieldComponent } from '../input-field/input-field.component'
import { Component, EventEmitter, Input, Output } from '@angular/core'

@Component({
  selector: 'app-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['../field.component.css', './icon-field.component.css']
})
export class IconFieldComponent
  extends InputFieldComponent
  implements IconFieldProps
{
  @Input() icon = 'fas fa-thumbs-up'
  @Output() onchangeIcon = new EventEmitter<string[]>()

  onChangeIconEvent(data: string[]): void {
    this.onchangeIcon.emit(data)
  }

  iconCSS = (): string => 'field__icon ' + this.icon
}
