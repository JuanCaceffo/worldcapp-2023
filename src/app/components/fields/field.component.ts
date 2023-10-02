import { Component, Input, OnInit } from '@angular/core'
import { FieldProps } from 'src/app/interfaces/field'
@Component({
  template: '',
  styleUrls: ['./field.component.css']
})
export abstract class FieldComponent implements OnInit {
  @Input() label?: string
  @Input() name?: string
  @Input() value?: string
  @Input() class?: string
  @Input() autofocus?: string
  @Input() tabindex?: string  
  @Input() props: FieldProps[] = [
    {
      label: '',
      name: 'undefined',
      value: '',
      class: '',
      autofocus: 'false',
      tabindex: '-1',
    }
  ]

  cssClass(index: number): string {
    return 'field ' + this.cssVariant() + this.props[index].class
  }

  abstract cssVariant(): string

  ngOnInit = (): void => {        
    this.props.forEach((element) => {
      Object.entries(this).forEach(([key, value]) => {
        // console.log(element[key as keyof FieldProps]) 
        if ( key in element ) {
          element[key as keyof FieldProps] = value
        }
      })      
    })
  }
}
