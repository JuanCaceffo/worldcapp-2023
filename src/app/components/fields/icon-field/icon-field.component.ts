import { IconFieldProps } from './../../../interfaces/field'
import { InputFieldComponent } from '../input-field/input-field.component'
import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core'

@Component({
  selector: 'app-icon-field',
  templateUrl: './icon-field.component.html',
  styleUrls: ['./icon-field.component.css', '../field.compnent.css']
})
export class IconFieldComponent
  extends InputFieldComponent
  implements OnInit, AfterViewInit, IconFieldProps
{
  @Input() icon = 'fas fa-thumbs-up'  
  @ViewChild(InputFieldComponent) inputFieldComponent!: InputFieldComponent  
  @ViewChild('iconField') iconField!: ElementRef

  constructor(){
    super()
  }

  ngAfterViewInit(): void {    
    const input = this.inputFieldComponent.inputField.nativeElement 
    const icon = this.iconField.nativeElement

    input.addEventListener('focus', () => {
      icon.classList.add('field__icon--focused')
    })

    input.addEventListener('blur', () => {
      icon.classList.remove('field__icon--focused')
    })
  }

  iconCSS():string{
    return 'field__icon ' + this.icon
  }

  override cssVariant(): string {
    return 'field--iconized'
  }
}
