import { IconFieldProps } from './../../../interfaces/field'
import { InputFieldComponent } from '../input-field/input-field.component'
import { Component, Input } from '@angular/core'
import { InputType } from '../field.component'

@Component({
  selector: 'app-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['../field.component.css', './icon-field.component.css']
})
export class IconFieldComponent extends InputFieldComponent implements IconFieldProps {
  @Input() icon = 'fas fa-thumbs-up'

  override cssClass(): string {
    
    return super.cssClass()
  }

  ngOnInit(): void {
    console.log("css class:",super.cssClass())
  }
  
  override cssVariant = (): InputType => 'field--iconized'

  iconCSS = (): string => 'field__icon ' + this.icon
}
