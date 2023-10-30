import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {ActivatedRoute, Router} from '@angular/router'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {UserService} from 'src/app/services/user-service/user.service'
import {mostrarError} from 'src/app/helpers/errorHandler'

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
    public userService: UserService
  ) {}
  async ngOnInit() {
    this.route.params.subscribe(async (param) => {
      const userID = param['user-id']
      const cardID = param['card-id']
      try {
        this.card = await this.userService.getGiftableFigurita(userID, cardID)
      } catch (error) {
        mostrarError(this, error)
        this.goCardPage()
      }
    })
    this.titleService.setTitle('Detalles figurita')
  }
  card!: Figurita
  errors: string[] = []

  goCardPage() {
    this.router.navigate(['/figuritas'])
  }

  get hasBackErrors() {
    return !!this.errors.length
  }

  async requestFigurita() {
    try {
      await this.userService.figuritaRequest(this.card)
      //si sale bien navega y notifica
      this.goCardPage()
      alert('La solicitud se completo con exito')
    } catch (error) {
      mostrarError(this, error)
    }
  }
}
