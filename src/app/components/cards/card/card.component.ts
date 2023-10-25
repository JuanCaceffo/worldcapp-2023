import {Component, Input, OnInit} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  @Input() card!: Figurita

  handleDelete() {
    
  }
}
