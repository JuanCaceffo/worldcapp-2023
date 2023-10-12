import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core'

@Directive({
  selector: '[shaded]'
})
export class ShadedDirective implements AfterViewInit {
  @Input() shaded?: string

  constructor(private element: ElementRef) {}

  ngAfterViewInit(): void {
    const elements =
      this.element.nativeElement.querySelectorAll('[shadedElement]')

    elements.forEach((e: HTMLElement) => {
      e.classList.add('shadow')
      this.shaded && e.classList.add('shadow--' + this.shaded)
    })
  }
}
