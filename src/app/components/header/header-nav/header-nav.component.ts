import { Component, Input, OnInit } from '@angular/core'

export interface listProps {
  content?: string
  classCss?: string
  link?: string
}
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  ngOnInit() {}
  @Input() isDropDown?: boolean
  listProps: Array<listProps> = [
    { content: 'Figuritas', link: '/figuritas' },
    { content: 'Sobres', link: '/sobres' },
    { content: 'Perfil', link: '/perfil' },
    { classCss: 'fa-solid fa-right-from-bracket fa-rotate-180', link: '/login' }
  ]
}
