import { Component, Input, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Figurita } from 'src/app/data/models/cards/Figurita'
import { searchbar } from 'src/app/data/models/searchbar/searchbar'
import { CardService } from 'src/app/data/services/cardService/Card.service'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent implements OnInit {
  aBuscar = ""
  constructor(
    private titleService: Title,
    public cardService: CardService
  ) {}

  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.listCards = this.cardService.getAllCards()
  }

  onEnterPressed() {
    const resultado = searchbar.search(this.aBuscar)
    this.value = resultado.map( (elemento) => elemento.cardID )
  }

  enviarDatos(){
    console.log(this.aBuscar)
  }

  @Input() value!: number[]

  // @Input() value = 'mamasa'
  // lista = [
  //   {
  //     type: 'text',
  //     value: 'prueba de input',
  //     label: 'texto de etiqueta'
  //   }
  // ]

  
  listCards: Array<Figurita> = []
}
