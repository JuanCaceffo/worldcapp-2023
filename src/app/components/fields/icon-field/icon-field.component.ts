import { IconFieldProps } from './../../../interfaces/field'
import { InputFieldComponent } from '../input-field/input-field.component'
import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['./icon-field.component.css', '../field.component.css', '../input-field/input-field.component.css']
})
export class IconFieldComponent
  extends InputFieldComponent
  implements OnInit, IconFieldProps
{
  @Input() icon = 'fas fa-thumbs-up'  
  

  constructor(){
    super()
  }

  iconCSS():string{
    return 'field__icon ' + this.icon
  }

  override ngOnInit(): void {
    console.log(this.icon)
  }

  override cssVariant(): string {
    return 'field--iconized'
  }
}
