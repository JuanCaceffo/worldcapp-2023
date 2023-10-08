import { Component, Input, OnInit } from '@angular/core'
import { FieldComponent, InputType } from '../field.component'
import { SelectFieldProps } from 'src/app/interfaces/field'

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['../field.component.css', './select-field.component.css']
})
export class SelectFieldComponent
  extends FieldComponent
  implements SelectFieldProps, OnInit
{
  @Input() options = []
  @Input() size = 10
  @Input() default = 'Elija una opción'

  ngOnInit(): void {
    this.value ? this.value : (this.value = this.default)
  }

  override cssVariant(): InputType {
    return 'field--select'
  }
}
