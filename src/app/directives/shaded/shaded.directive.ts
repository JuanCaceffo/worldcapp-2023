import { Directive, ElementRef, Input } from '@angular/core'

@Directive({
  selector: '[shaded]'
})
export class ShadedDirective {
  @Input() shaded = ''

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const shadedElement = this.element.nativeElement.querySelector(
      'input, select, button'
    )
        
    switch (this.shaded) {
    case 'small':
      this.castShadows(shadedElement, 'shadow shadow--small')
      break
    case 'medium':
      this.castShadows(shadedElement, 'shadow shadow--medium')
      break
    case 'large':
      this.castShadows(shadedElement, 'shadow shadow--large')
      break
    default:
      this.castShadows(shadedElement, 'shadow')
      break
    }
  } 

  castShadows(element:HTMLElement, cssClass: string): void {
    element && element.classList.add(cssClass)
  }
}
