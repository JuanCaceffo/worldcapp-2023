import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Router} from '@angular/router'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(public userService: UserService, private router: Router) {}
  @Input() card!: Figurita
  @Output() onClicked = new EventEmitter<Figurita>()
  @Output() onClickDelete = new EventEmitter<number>()

  emitOnClicked() {
    this.onClicked.emit(this.card)
  }
  
  getTestId() {
    return `card-${this.card.id}`
  }

  emitOnClickDelete() {
    this.onClickDelete.emit(this.card.props.id)
  }
}
