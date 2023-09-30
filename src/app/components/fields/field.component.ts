import { Component, Input } from '@angular/core'
import { FieldProps } from 'src/app/interfaces/field'
@Component({
  template: '',
  styleUrls: ['./field.component.css']
})
export abstract class FieldComponent implements FieldProps {
  @Input() label = ''
  @Input() name = 'undefined'
  @Input() value!: string | number
  @Input() class = ''
  @Input() autofocus = false
  @Input() tabindex: number | undefined

  cssClass(): string {
    return 'field ' + this.cssVariant() + this.class
  }

  abstract cssVariant(): string
}
