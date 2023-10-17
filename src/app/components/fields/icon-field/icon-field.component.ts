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
  @Input() buttonOn = false
  @Output() onchangeIcon = new EventEmitter<string[]>()
<<<<<<< HEAD
  @Output() emitter = new EventEmitter<string>()

  onChangeIconEvent(data:string[]): void {      
    this.value = data[0]
    this.onchangeIcon.emit(data)
  }

  clickAction(){
    this.emitter.emit(this.value)
  }

  iconCSS = (): string => 'field__icon ' + this.icon

=======

  onChangeIconEvent(data: string[]): void {
    this.onchangeIcon.emit(data)
  }

  iconCSS = (): string => 'field__icon ' + this.icon
>>>>>>> development
}
