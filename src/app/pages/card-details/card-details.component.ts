import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.css']
})
export class CardDetailsComponent {
  constructor(private titleService: Title) {
    this.titleService.setTitle('Detalles de TODO:Figurita')
  }
}
