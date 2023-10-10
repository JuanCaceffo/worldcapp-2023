import { IconFieldProps } from './../../../interfaces/field'
import { InputFieldComponent } from '../input-field/input-field.component'
import { Component, Input, OnInit } from '@angular/core'
import { InputType } from '../field.component'

@Component({
  selector: 'app-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['../field.component.css', './icon-field.component.css']
})
export class IconFieldComponent extends InputFieldComponent implements OnInit {
  @Input() icon?: string
  @Input() override props: IconFieldProps = {
    label: '',
    name: '',
    value: '',
    class: 'field--iconized',
    placeholder: 'Escriba aquí',
    type: 'text',
    error: '',
    autofocus: 'false',
    tabindex: '-1',
    icon: 'fas fa-thumbs-up',
    min: '',
    max: '',
    testid: ''
  }

  override cssVariant = (): InputType => 'field--iconized'

  iconCSS = (): string => 'field__icon ' + this.props.icon
}
