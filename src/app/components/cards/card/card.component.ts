import {UserService} from './../../../data/services/userService/User.service'
import {Component, Input, OnInit} from '@angular/core'
import {Figurita} from 'src/app/data/models/cards/Figurita'

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
