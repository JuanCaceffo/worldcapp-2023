import { Component } from '@angular/core'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  navbar = new NavBar()
}

interface NavBarContent {
  href: string
  contentName: string
}
class NavBar {
  /* routing here */
  content: Array<NavBarContent> = [
    {
      href: '',
      contentName: 'Figuritas'
    },
    {
      href: '',
      contentName: 'Sobres'
    },
    {
      href: '',
      contentName: 'Perfil'
    }
  ]
}


