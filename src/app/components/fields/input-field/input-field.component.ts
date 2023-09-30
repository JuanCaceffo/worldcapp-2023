import { FieldComponent } from 'src/app/components/fields/field.component'
import { InputFieldProps } from 'src/app/interfaces/field'
import { Component, Input, OnInit} from '@angular/core'

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
  @Input() error: string | undefined
     
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

  // isNumeric(): boolean {
  //   return /^\d+$/.test(this.value)
  // }
}
