import { Component, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.css']
})
export class CardSearchComponent {
  @Input() value = 'mamasa'
  lista = [{ 
    type: 'text',
    value: 'prueba de input',
    label: 'texto de etiqueta'    
  }]

  constructor(private titleService: Title) {
    this.titleService.setTitle('Figuritas')
  }
}

