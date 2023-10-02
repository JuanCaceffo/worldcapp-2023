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
  @Input() override props: InputFieldProps[] = [
    {
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
  ]

  // ngOnInit(): void {
  //   // console.log(this.label)
  //   // console.log(this.className)
  // }

  override cssVariant = (): string => ''

  override cssClass(index: number): string {
    return super.cssClass(index) + this.errorStyle(index)
  }

  errorMessage = (index: number): string => {    
    this.validateErrorMessage(index)
    return this.props[index].error
  }

  errorStyle = (index: number): string => this.props[index].error !== '' ? 'field--error' : ''

  validateErrorMessage = (index: number) => {
    if (this.props[index].error.length > MAXERRORLENGTH) {
      throw new Error(
        `Too long error msg, ${
          this.props[index].error.length - MAXERRORLENGTH
        } chars exeeded of ${MAXERRORLENGTH}.`
      )
    }
  }
}