import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropDown: boolean = false
  isDesktop: boolean = false

  constructor() {
    window.addEventListener('resize', () => {
      this.isDesktop = this.onDesktop()
    })
  }

  onDropDown() {
    this.isDropDown = !this.isDropDown
  }
  onDesktop() {
    return window.innerWidth >= 768
  }
}
