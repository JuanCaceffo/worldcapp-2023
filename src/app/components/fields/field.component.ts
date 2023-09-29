import { Component, Input } from '@angular/core'
import { FieldProps } from 'src/app/interfaces/field'

@Component({
  template:'',
  styleUrls:['./field.component.css']
})
export abstract class FieldComponent implements FieldProps {
  @Input() label = ''
  @Input() className = ''
  @Input() value!: string | number

  
  cssClass(): string {
    return 'field ' + this.cssVariant() + this.className
  }
  
  abstract cssVariant(): string 
}
