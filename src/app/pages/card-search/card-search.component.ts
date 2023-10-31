import {Router} from '@angular/router'
import {Component, Input, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {cardFilter} from 'src/app/models/searchbar/searchbar'
import {CardService} from 'src/app/services/card-service/card.service'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {
  constructor(
    private titleService: Title,
    public cardService: CardService,
    private router: Router
  ) {}
  filter = cardFilter
  @Input() handleClicked = (card: Figurita) => {
    this.router.navigate([
      '/detalle-figurita',
      card.props.idUsuario,
      card.props.id
    ])
  }
  @Input() instanceFigus = async () => {
    this.listCards = await this.cardService.getCards()
  }
  @Input() listCards: Array<Figurita> = []

  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.instanceFigus()
  }
}
