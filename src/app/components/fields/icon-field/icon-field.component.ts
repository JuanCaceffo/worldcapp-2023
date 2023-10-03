import { IconFieldProps } from './../../../interfaces/field'
import { InputFieldComponent } from '../input-field/input-field.component'
import { Component, Input, OnInit } from '@angular/core'
import { InputType } from '../field.component'

@Component({
  selector: 'app-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['../field.component.css', './icon-field.component.css']
})
<<<<<<< HEAD
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
    icon: 'fas fa-thumbs-up'
  }

  override cssVariant = (): string => 'field--iconized'

  iconCSS = (): string => 'field__icon ' + this.props.icon
=======
export class IconFieldComponent
  extends InputFieldComponent
  implements OnInit, IconFieldProps
{
  @Input() icon = 'fas fa-thumbs-up'

  constructor() {
    super()
  }

  iconCSS(): string {
    return 'field__icon ' + this.icon
  }

  override ngOnInit(): void {
    console.log(this.icon)
  }

  override cssVariant(): InputType {
    return 'field--iconized'
  }
>>>>>>> feature/test-filters
}
