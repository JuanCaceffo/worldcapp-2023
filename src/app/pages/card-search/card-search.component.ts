import { CardService } from './../../data/services/cardService/Card.service'
import { Component, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Card } from 'src/app/data/models/cards/Figurita'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {
  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.listCards = this.getAllCards()
  }
  constructor(private titleService: Title, public cardService: CardService) {}
  listCards: Array<Card> = []

  getAllCards() {
    return this.cardService.getAllCards()
  }
}
