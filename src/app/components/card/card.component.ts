import { Component, OnInit } from '@angular/core'
import { Card } from 'src/app/models/cards/Card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  constructor(card: Card) {}

  ngOnInit() {}
}
