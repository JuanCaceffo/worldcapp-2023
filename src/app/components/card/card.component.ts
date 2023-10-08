import { Component, Input, OnInit } from '@angular/core'
import { Figurita } from 'src/app/data/models/cards/Figurita'

type cardType = 'owner' | 'details'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  ngOnInit() {}
  @Input() card!: Figurita
  @Input() cardType!: cardType
}
