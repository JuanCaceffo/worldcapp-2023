import {UserService} from 'src/app/services/user-service/user.service'
import {Component, Input, OnInit} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor(public userService: UserService) {}
  ngOnInit() {}
  @Input() card!: Figurita
}
