import {Component, Input, OnInit} from '@angular/core'
import {UserFigusListType} from 'src/app/dtos/user.dto'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(public userService: UserService) {}
  ngOnInit() {}
  @Input() card!: Figurita
  @Input() listCardType?: UserFigusListType

  handleDelete() {
    if (this.listCardType && this.card.isOwner) {
      try {
        this.userService.deleteFigu(this.card.props.id, this.listCardType)
        location.reload()
      } catch (error) {
        alert('alerta por subnormal')
      }
    }
  }
}
