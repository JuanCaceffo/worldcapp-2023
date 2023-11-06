import {UserService} from 'src/app/services/user-service/user.service'
import {CardService} from './../../services/card-service/card.service'
import {Component} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {ActivatedRoute} from '@angular/router'
import {FigusListType} from 'src/app/dtos/figurita.dto'
import {mostrarError} from 'src/app/helpers/errorHandler'
import {CardSearch} from 'src/app/models/searchbar/searchbar'

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent {
  constructor(
    private titleService: Title,
    private cardService: CardService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Agregar Figuritas')
    this.route.params.subscribe((param) => {
      this.listCardType = param['figus-list-type'] as FigusListType
      //console.log(this.listCardType)
    })
  }
  listCardType!: FigusListType
  listCards: Figurita[] = []
  errors: string[] = []
  filter = new CardSearch()

  async getAll() {
    this.listCards = await this.cardService.getCollectibleFigus(this.filter)
  }

  async addCard(card: Figurita) {
    await this.userService.addFigurita(card.props.id, this.listCardType)
    try {
      alert('figurita agregada con exito')
    } catch (error) {
      mostrarError(this, error)
    }
  }
}
