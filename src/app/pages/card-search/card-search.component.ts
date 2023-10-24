import {Component, Input, OnInit} from '@angular/core'
import {Title} from '@angular/platform-browser'
import { CardSearch } from 'src/app/interfaces/searchCriteria'
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

  filterData = {
    palabraClave: "",
    onFire: false,
    esPromesa: false,
    cotizacionInicial: 0,
    cotizacionFinal: 0
  }

  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.getAll()
  }

  async getAll() {
    this.listCards = await this.cardService.getCards(this.filterData)
  }

  enviarDatos(datos: CardSearch) {
    this.filterData.cotizacionInicial = datos.cotizacionInicial 
    this.filterData.cotizacionFinal = datos.cotizacionFinal
    this.filterData.onFire = datos.onFire
    this.filterData.esPromesa = datos.esPromesa
  }

  clickAction() {
    this.getAll()
  }
}
