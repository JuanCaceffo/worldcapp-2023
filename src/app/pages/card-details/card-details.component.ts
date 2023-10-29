import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {ActivatedRoute, Router} from '@angular/router'
import {Figurita} from 'src/app/models/cards/figurita.model'
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
    public userService: UserService
  ) {}
  
  async ngOnInit() {
    this.route.params.subscribe(async (param) => {
      const userID = param['user-id']
      const cardID = param['card-id']
      try {
        this.card = await this.userService.getGiftableFigurita(userID, cardID)
      } catch (error) {
        //TODO: arrojar un toast si hay un error y manejar el tipo de error
        alert('error al traer la card')
        this.goCardPage()
      }
    })
    this.titleService.setTitle('Detalles figurita')
  }
  card!: Figurita

  goCardPage() {
    this.router.navigate(['/figuritas'])
  }

  //TODO cambiar los alert por una notificaion copada
  async requestFigurita() {
    try {
      await this.userService.figuritaRequest(this.card)
      //si sale bien navega y notifica
      this.goCardPage()
      alert('La solicitud se completo con exito')
    } catch (error) {
      //TODO: validar tipo de error
      alert('no se realizo la soli o se rompio el sv jeje')
    }
  }
}
