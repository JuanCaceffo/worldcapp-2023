import {
  FieldComponent,
  InputType
} from 'src/app/components/fields/field.component'
import { InputFieldProps } from 'src/app/interfaces/field'
import { Component, Input, OnInit } from '@angular/core'

const MAXERRORLENGTH = 40
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['../field.component.css', './input-field.component.css']
})
<<<<<<< HEAD
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
=======
export class InputFieldComponent
  extends FieldComponent
  implements OnInit, InputFieldProps
{
  @Input() placeholder = 'Escriba aquí'
  @Input() type = 'text'
  @Input() error = ''

  constructor() {
    super()
  }

  ngOnInit(): void {
    // console.log(this.label)
    // console.log(this.className)
  }

  override cssVariant(): InputType {
    return ''
  }
>>>>>>> feature/test-filters

  override cssClass(): string {
    return super.cssClass() + this.errorStyle()
  }

  errorMessage = (): string => {
    this.validateErrorMessage()
    return this.props.error
  }

  errorStyle = (): string => (this.props.error !== '' ? 'field--error' : '')

<<<<<<< HEAD
  validateErrorMessage = () => {
    if (this.props.error.length > MAXERRORLENGTH) {
      throw new Error(
        `Too long error msg, ${
          this.props.error.length - MAXERRORLENGTH
=======
  validateErrorMessage() {
    if (this.error.length > MAXERRORLENGTH) {
      throw new Error(
        `Too long error msg, ${
          this.error.length - MAXERRORLENGTH
>>>>>>> feature/test-filters
        } chars exeeded of ${MAXERRORLENGTH}.`
      )
    }
  }
}
