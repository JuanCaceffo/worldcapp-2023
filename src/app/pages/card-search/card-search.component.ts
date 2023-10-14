import {Component, Input, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {CardService} from 'src/app/services/card-service/card.service'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {
  constructor(private titleService: Title, public cardService: CardService) {}

  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.listCards = this.cardService.getAllCards()
  }

  @Input() value = 'mamasa'
  lista = [
    {
      type: 'text',
      value: 'prueba de input',
      label: 'texto de etiqueta'
    }
  ]

  listCards: Array<Figurita> = []
}
