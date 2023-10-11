import {
  FieldComponent,
  InputType
} from 'src/app/components/fields/field.component'
import { InputFieldProps } from 'src/app/interfaces/field'
import { Component, Input } from '@angular/core'

const MAXERRORLENGTH = 40
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['../field.component.css', './input-field.component.css']
})
export class InputFieldComponent extends FieldComponent implements InputFieldProps {
  @Input() placeholder = ''
  @Input() type = 'text'
  @Input() error = ''
  @Input() min?: string
  @Input() max?: string

  override cssVariant = (): InputType => ''
  
  override cssClass(): string {    
    return `${super.cssClass()} ${this.errorStyle()}`
  }

  errorMessage = (): string => {
    this.validateErrorMessage()
    return this.error
  }

  errorStyle = (): string => (this.error !== '' ? 'field--error' : '')

  validateErrorMessage = () => {
    if (this.error.length > MAXERRORLENGTH) {
      throw new Error(
        `Too long error msg, ${
          this.error.length - MAXERRORLENGTH
        } chars exeeded of ${MAXERRORLENGTH}.`
      )
    }
  }
}
