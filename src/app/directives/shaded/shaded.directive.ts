import { Directive, ElementRef, Input, OnInit } from '@angular/core'

@Directive({
  selector: '[shaded]'
})
export class ShadedDirective implements OnInit {
  @Input() shaded?: string

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    const elements =
      this.element.nativeElement.querySelectorAll('[shadedElement]')

    elements.forEach((e: HTMLElement) => {
      e.classList.add('shadow')
      this.shaded && e.classList.add('shadow--' + this.shaded)
    })
  }
}
