import { Component, Input, OnInit } from '@angular/core'
import { Card } from 'src/app/data/models/cards/Card'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: Card
  //TODO: probar con injeccion de dependencias por meido de constructor
  props = this.card.cardProps

  ngOnInit() {}
}
