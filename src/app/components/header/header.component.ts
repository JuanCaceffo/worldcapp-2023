import { Component } from '@angular/core'
import { listProps } from './header-nav/header-nav.component'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isDropDown: boolean = false
  navBarProps: Array<listProps> = [
    { content: 'Figuritas' },
    { content: 'Sobres' },
    { content: 'Perfil' },
    { classCss: 'fa-solid fa-right-from-bracket fa-rotate-180' }
  ]

  onDropDown() {
    this.isDropDown = !this.isDropDown
  }
}
