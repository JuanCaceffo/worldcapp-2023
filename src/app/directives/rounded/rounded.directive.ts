import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core'

@Directive({
  selector: '[rounded]'
})
export class RoundedDirective implements AfterViewInit {
  @Input() rounded?: string

  constructor(private element: ElementRef) {}
 
  ngAfterViewInit(): void {    
    const elements = this.element.nativeElement.querySelectorAll('[roundedElement]')    
    
    elements.forEach((e: HTMLElement) => {      
      e.classList.add('rounded')
      this.rounded && e.classList.add('rounded--' + this.rounded)
    })
  }
}
