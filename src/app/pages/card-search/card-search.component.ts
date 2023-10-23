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

  @Input() value!: number[]
  listCards: Array<Figurita> = []
  searchValue?: string

  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.getAll()
  }

  async getAll() {
    this.listCards = await this.cardService.getCards()
  }

  enviarDatos(datos: string) {
    console.log(datos)
  }

  clickAction() {

  }
}
