import {CardService} from './../../services/card-service/card.service'
import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Figurita} from 'src/app/models/cards/figurita.model'

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent {
  constructor(private titleService: Title, public cardService: CardService) {}

  ngOnInit() {
    this.titleService.setTitle('Agregar Figuritas')
  }
  listCards: Figurita[] = []

  async getAll() {
    this.listCards = await this.cardService.getCollectibleFigus()
  }

  getCard(card: Figurita) {
    console.log('implementar')
  }
}
