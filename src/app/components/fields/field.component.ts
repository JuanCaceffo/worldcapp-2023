import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FieldProps } from 'src/app/interfaces/field'

export type InputType =
  | ''
  | 'field--text'
  | 'field--select'
  | 'field--checkbox'
  | 'field--radio'
  | 'field--iconized'

@Component({
  template: '',
  styleUrls: ['./field.component.css']
})
export abstract class FieldComponent implements FieldProps {
  @Input() label = ''
  @Input() name = 'undefined'
  @Input() value = ''
  @Input() class = ''
  @Input() autofocus = 'false'
  @Input() tabindex = '-1'
  @Input('data-testid') testid = ''
  
  @Output() onchange = new EventEmitter<string[]>()

  constructor() {}

  cssClass(): string {    
    return `field ${this.cssVariant()} ${this.class}`
  }

  abstract cssVariant(): InputType
  
  onChangeEvent() {
    this.onchange.emit([this.value, this.name])
  }
}
