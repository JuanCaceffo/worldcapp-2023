import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core'
import {Router} from '@angular/router'
import {FigusListType} from 'src/app/dtos/figurita.dto'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}
  ngOnInit() {}
  @Input() card!: Figurita
  @Output() onClicked = new EventEmitter<Figurita>()
  @Output() onClickDelete = new EventEmitter<number>()

  emitOnClicked() {
    this.onClicked.emit(this.card)
  }

  emitOnClickDelete() {
    this.onClickDelete.emit(this.card.props.id)
  }
}
