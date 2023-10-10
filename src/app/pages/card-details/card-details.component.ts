import {Component, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import {ActivatedRoute, Router} from '@angular/router'
import {Figurita} from 'src/app/data/models/cards/Figurita'
import {CardService} from 'src/app/data/services/cardService/Card.service'

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
    public cardService: CardService
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
}
