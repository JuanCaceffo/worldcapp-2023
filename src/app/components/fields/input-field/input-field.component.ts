import { FieldComponent } from 'src/app/components/fields/field.component'
import { InputFieldProps } from 'src/app/interfaces/field'
import { Component, Input, OnInit } from '@angular/core'

const MAXERRORLENGTH = 40
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['../field.component.css', './input-field.component.css']
})
export class InputFieldComponent extends FieldComponent implements OnInit {
  @Input() placeholder?: string
  @Input() type?: string
  @Input() error?: string
  @Input() override props: InputFieldProps = {
    label: '',
    name: '',
    value: '',
    class: '',
    placeholder: 'Escriba aquí',
    type: 'text',
    autofocus: 'false',
    tabindex: '-1',
    error: ''
  }

  override cssVariant = (): string => ''

  override cssClass(): string {
    return super.cssClass() + this.errorStyle()
  }

  errorMessage = (): string => {
    this.validateErrorMessage()
    return this.props.error
  }

  errorStyle = (): string => (this.props.error !== '' ? 'field--error' : '')

  validateErrorMessage = () => {
    if (this.props.error.length > MAXERRORLENGTH) {
      throw new Error(
        `Too long error msg, ${
          this.props.error.length - MAXERRORLENGTH
        } chars exeeded of ${MAXERRORLENGTH}.`
      )
    }
  }
}
