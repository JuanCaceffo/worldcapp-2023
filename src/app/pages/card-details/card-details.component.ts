import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {ActivatedRoute, Router} from '@angular/router'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {CardService} from 'src/app/services/card-service/card.service'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: [
    '../../components/cards/card/card.component.css',
    './card-details.component.css'
  ]
})
export class CardDetailsComponent implements OnInit {
  constructor(
    private titleService: Title,
    private route: ActivatedRoute,
    private router: Router,
    public cardService: CardService,
    public userService: UserService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((param) => {
      const cardID = param['id']
      const card = this.cardService.getCardById(cardID)
      if (card) {
        this.card = card
        return
      }
      //TODO: manejar error si no se encuentra la figurita
      console.error('jijijija')
      this.goCardPage()
    })
    this.titleService.setTitle('Detalles de TODO:Figurita')
  }
  card!: Figurita

  goCardPage() {
    this.router.navigate(['/figuritas'])
  }

  requestFigurita() {
    this.userService.figuritaRequest(this.card)
    //si todo sale bien navega
    this.goCardPage()
  }
}
