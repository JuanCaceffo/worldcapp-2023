import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  header = new Header()
}

class Header {
  isDropDown: boolean = false

  onDropDown() {
    this.isDropDown = !this.isDropDown 
  }
}
