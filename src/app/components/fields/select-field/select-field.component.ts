import { Component, Input, OnInit } from '@angular/core'
import { FieldComponent } from '../field.component'
import { SelectFieldProps } from 'src/app/interfaces/field'

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['../field.component.css','./select-field.component.css']
})
export class SelectFieldComponent extends FieldComponent implements OnInit {
  @Input() options?:[]
  @Input() size?:number
  @Input() default?:string
  @Input() override props: SelectFieldProps[] = [
    {
      label: '',
      name: '',
      value: 'Elija una opción',
      class: '',
      options: [],
      size: '10',
      autofocus: 'false',
      tabindex: '-1',
    }
  ]

  override cssVariant = (): string =>'field--select'
  
  // ngOnInit():void {
  //   // this.value ?  this.value : this.value = this.default
  // }
}
