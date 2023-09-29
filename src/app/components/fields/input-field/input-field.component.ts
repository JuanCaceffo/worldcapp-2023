import { FieldComponent } from 'src/app/components/fields/field.component'
import { InputFieldProps } from 'src/app/interfaces/field'
import { Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css', '../field.component.css']
})
export class InputFieldComponent
  extends FieldComponent
  implements OnInit, InputFieldProps
{
  @Input() placeholder = 'Escriba aquí'   
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
