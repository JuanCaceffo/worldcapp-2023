import { FieldComponent } from 'src/app/components/fields/field.component'
import { InputFieldProps } from 'src/app/interfaces/field'
import { Component, Input, OnInit} from '@angular/core'

const MAXERRORLENGTH = 40
@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['../field.component.css','./input-field.component.css']
})
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

  override cssVariant(): string {
    return ''
  }

  override cssClass(): string {
    return super.cssClass() + this.errorStyle()
  }

  errorMessage(): string {
    this.validateErrorMessage()
    return this.error
  }

  errorStyle(): string {
    return this.error !== '' ? 'field--error' : ''
  }

  validateErrorMessage(){    
    if(this.error.length > MAXERRORLENGTH) {
      throw new Error(`Too long error msg, ${this.error.length - MAXERRORLENGTH} chars exeeded of ${MAXERRORLENGTH}.`)
    }
  }

  // isNumeric(): boolean {
  //   return /^\d+$/.test(this.value)
  // }
}
