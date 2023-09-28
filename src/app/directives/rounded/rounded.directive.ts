import { Directive, ElementRef, Renderer2 } from '@angular/core'

@Directive({
  selector: '[rounded]'
})
export class RoundedDirective {
  constructor( private element: ElementRef, private renderer: Renderer2){
    
  }

  ngOnInit(): void {
    const inputElement = this.element.nativeElement.querySelector('input')    
    inputElement && this.renderer.addClass(inputElement, 'field--rounded')
  }
}