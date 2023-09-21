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
    this.isDesktop = this.onDesktop()
    window.addEventListener('resize', () => {
      this.isDesktop = this.onDesktop()
    })
  }

  iconSelectorClass() {
    if (this.isDropDown) {
      return 'fa-solid fa-xmark'
    }
    return 'fa-solid fa-bars'
  }
  onDropDown() {
    this.isDropDown = !this.isDropDown
  }
  onDesktop() {
    return window.innerWidth >= 768
  }
}
