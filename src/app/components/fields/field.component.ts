import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { FieldProps } from 'src/app/interfaces/field'

export type InputType =
  | ''
  | 'field--text'
  | 'field--select'
  | 'field--checkbox'
  | 'field--radio'
  | 'field--iconized'

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
  @Input() testid?: string
  @Input() props: FieldProps = {
    label: '',
    name: 'undefined',
    value: '',
    class: '',
    autofocus: 'false',
    tabindex: '-1',
    testid: ''
  }

  @Output() onchange = new EventEmitter<string[]>()

  cssClass(): string {
    return `field ${this.cssVariant()}${this.props.class}`
  }

  abstract cssVariant(): InputType

  ngOnInit(): void {
    Object.entries(this).forEach(([key, value]) => {
      if (key in this.props) {
        this.props[key as keyof FieldProps] = value
      }
    })
  }

  onChangeEvent() {
    this.onchange.emit([this.props.value, this.props.name])
  }

  isTestId(): string {
    console.log(this.props.testid)
    return this.props.testid 
  }
}
