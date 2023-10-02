import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
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
  @Input() props: FieldProps = {
    label: '',
    name: 'undefined',
    value: '',
    class: '',
    autofocus: 'false',
    tabindex: '-1'
  }

  @Output() onchange = new EventEmitter<string>()

  cssClass(): string {
    return 'field ' + this.cssVariant() + this.props.class
  }

  abstract cssVariant(): string

  ngOnInit(): void {
    Object.entries(this).forEach(([key, value]) => {
      if (key in this.props) {
        this.props[key as keyof FieldProps] = value
      }
    })
  }

  onChangeEvent(value: string) {
    this.onchange.emit(value)
  }
}
