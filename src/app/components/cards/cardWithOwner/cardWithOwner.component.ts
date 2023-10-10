import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Figurita} from 'src/app/data/models/cards/Figurita'

@Component({
  selector: 'app-cardWtihOwner',
  templateUrl: './cardWithOwner.component.html',
  styleUrls: ['./cardWithOwner.component.css']
})
export class CardWithOwnerComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit() {}
  @Input() card!: Figurita

  handleClick() {
    this.router.navigate(['/detalle-figurita', this.card.cardID])
  }
}
