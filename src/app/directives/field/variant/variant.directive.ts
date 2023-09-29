import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
  selector: '[variant]'
})
export class VariantDirective {
  @Input() variant = ''

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const inputElements = this.element.nativeElement.querySelectorAll('[inputElement]')
    
    
    inputElements.forEach((e: HTMLElement) => {
      e.classList.add('field--' + this.variant)
    })    

    if (this.variant === 'icon-right') {
      const iconElements = this.element.nativeElement.querySelectorAll('[iconElement]')
     
      iconElements.forEach((e: HTMLElement) => {
        e.classList.add('field__icon--' + this.variant)
      })
    }    
  }
}
