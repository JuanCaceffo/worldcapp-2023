import {UserService} from 'src/app/services/user-service/user.service'
import {CardService} from './../../services/card-service/card.service'
import {Component} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {ActivatedRoute} from '@angular/router'
import {NotifierService} from 'src/app/services/notifier-service/notifier.service'
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
    private route: ActivatedRoute,
    private notifierService: NotifierService
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
    this.listCards = await this.cardService.getCollectibeFigus(this.filter)
  }

  addCard = async (card: Figurita) => {
    try {
      await this.routeData.onClickCard(card, this.userService)
      await this.getAll()
      this.notifierService.notify('figurita agregada con exito', 'success')
    } catch (e) {
      this.notifierService.notify(e, 'error')
    }
  }
}
