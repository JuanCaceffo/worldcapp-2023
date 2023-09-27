import { Component, Input, OnInit } from '@angular/core'

export interface listProps {
  content?: string
  classCss?: string
}
@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.css']
})
export class HeaderNavComponent implements OnInit {
  ngOnInit() {}
  @Input() isDropDown?: boolean
  @Input() listProps: Array<listProps> = []
}
