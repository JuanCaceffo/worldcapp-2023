import {Component, Input, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {CardSearch} from 'src/app/models/searchbar/searchbar'
import {CardService} from 'src/app/services/card-service/card.service'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {
  constructor(private titleService: Title, public cardService: CardService, public cardSearch: CardSearch) {}

  @Input() value!: number[]
  listCards: Array<Figurita> = []

  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.getAll()
  }

  async getAll() {
    this.listCards = await this.cardService.getCards(this.cardSearch)
  }

  clickAction() {
    this.getAll()
    console.log('pepe')
  }
}
