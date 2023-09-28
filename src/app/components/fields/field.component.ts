import { Directive, Input } from '@angular/core'
import { FieldProps } from 'src/app/interfaces/field'

@Directive()
export abstract class FieldComponent implements FieldProps {
  @Input() label = ''
  @Input() className = ''
  @Input() value!: string  

  cssClass(): string {
    return 'field ' + this.cssVariant() + this.className
  }

  abstract cssVariant(): string 
}
