import { Component, EventEmitter, Input, Output } from '@angular/core'
import { CardSearch, StoreSearch } from 'src/app/models/searchbar/searchbar'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {
  @Input() filter?: StoreSearch | CardSearch  
  @Output() buttonClick = new EventEmitter<void>()  

  clickAction() {
    this.buttonClick.emit()
  }
}
