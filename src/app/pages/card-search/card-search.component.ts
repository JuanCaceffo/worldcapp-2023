import { Component, Input, OnInit } from '@angular/core'
import { Title } from '@angular/platform-browser'
import { Figurita } from 'src/app/data/models/cards/Figurita'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent inplements OnInit {
  // @Input() value = 'mamasa'
  // lista = [{ 
  // type: 'text',
  // value: 'prueba de input',
  // label: 'texto de etiqueta'    
  // }]
  
  
  ngOnInit() {
    this.titleService.setTitle('Figuritas')
    this.listCards = this.cardService.getAllCards()
  }
  constructor(private titleService: Title, public cardService: CardService) {}
  listCards: Array<Figurita> = []
}