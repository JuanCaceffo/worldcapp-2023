import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[rounded]'
})
export class RoundedDirective implements OnInit {
  @Input() rounded?: string

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const elements =
      this.element.nativeElement.querySelectorAll('[roundedElement]')
    elements.forEach((e: HTMLElement) => {
      e.classList.add('rounded')
      this.rounded && e.classList.add('rounded--' + this.rounded)
    })
  }
}
