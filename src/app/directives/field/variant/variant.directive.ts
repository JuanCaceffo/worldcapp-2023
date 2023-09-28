import { Directive, ElementRef, Input, Renderer2 } from '@angular/core'

@Directive({
  selector: '[variant]'
})
export class VariantDirective {
  @Input() variant = ''

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const inputElement = this.element.nativeElement.querySelector('input')
    
    switch (this.variant) {
    case 'simple':
      inputElement && this.renderer.addClass(inputElement, 'field--underline')
      break
    case 'icon-right':
      break
    }
  }
}
