import {UserService} from 'src/app/services/user-service/user.service'
import {CardService} from './../../services/card-service/card.service'
import {Component} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {ActivatedRoute} from '@angular/router'
import {mostrarError} from 'src/app/helpers/errorHandler'
import {CardSearch} from 'src/app/models/searchbar/searchbar'
import {DataCardAddProfile} from 'src/app/app-routing.module'

@Component({
  selector: 'app-card-add',
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent {
  constructor(
    private cardService: CardService,
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.routeData = data as DataCardAddProfile
    })
  }
  listCards: Figurita[] = []
  errors: string[] = []
  filter = new CardSearch()
  routeData!: DataCardAddProfile

  getAll = async () => {
    this.listCards = await this.routeData.getFigus(
      this.cardService,
      this.filter
    )
  }

  addCard = async (card: Figurita) => {
    try {
      await this.routeData.onClickCard(card, this.userService)
      await this.getAll()
      alert('figurita agregada con exito')
    } catch (error) {
      mostrarError(this, error)
    }
  }
}
