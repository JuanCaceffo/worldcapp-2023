import { Component, Input, OnInit } from '@angular/core'
import { Card } from 'src/app/data/models/cards/Card'

type cardType = 'owner' | 'details'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  ngOnInit() {}
  @Input() card!: Card
  @Input() cardType!: cardType
}
