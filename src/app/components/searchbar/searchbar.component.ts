import { Component, EventEmitter, Output } from '@angular/core'
import { CardSearch } from 'src/app/models/searchbar/searchbar'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  constructor(public cardSearch: CardSearch) {}
  @Output() buttonClick = new EventEmitter<void>()

  clickAction() {
    this.buttonClick.emit()
  }
}
