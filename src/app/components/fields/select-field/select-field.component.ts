import { Component, Input } from '@angular/core'
import { FieldComponent } from '../field.component'
import { SelectFieldProps } from 'src/app/interfaces/field'

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.css','../field.compnent.css']
})
export class SelectFieldComponent extends FieldComponent implements SelectFieldProps {
  @Input() options = []
  
  override cssVariant(): string {
    return 'field--select'
  }
}
