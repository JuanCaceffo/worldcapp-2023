import { Component, Input, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Figurita } from 'src/app/data/models/cards/Figurita'

@Component({
  selector: 'app-cardWtihOwner',
  templateUrl: './cardWtihOwner.component.html',
  styleUrls: ['./cardWtihOwner.component.css']
})
export class CardWtihOwnerComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit() {}
  @Input() card!: Figurita

  handleClick() {
    this.router.navigate(['/detalle-figurita', this.card.ID])
  }
}
