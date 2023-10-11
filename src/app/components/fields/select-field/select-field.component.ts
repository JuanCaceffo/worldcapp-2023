import { Component, Input } from '@angular/core'
import { FieldComponent } from '../field.component'
import { SelectFieldProps } from 'src/app/interfaces/field'

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['../field.component.css', './select-field.component.css']
})
export class SelectFieldComponent extends FieldComponent implements SelectFieldProps {
  @Input() options: string[] = []
  @Input() size = '10'
  @Input() default?: string
}