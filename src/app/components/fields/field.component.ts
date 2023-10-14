import { Component, Input } from '@angular/core'
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
  @Input() name = ''
  @Input() value = ''
  @Input() class = 'field'
  @Input() autofocus = 'false'
  @Input() tabindex = '-1'
  @Input('data-testid') testid = ''

  constructor() {}
}
