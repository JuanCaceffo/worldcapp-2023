import {Component, Input, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Figurita} from 'src/app/models/cards/figurita.model'

@Component({
  selector: 'app-cardWithOwner',
  templateUrl: './card-with-owner.component.html',
  styleUrls: ['./card-with-owner.component.css']
})
export class CardWithOwnerComponent implements OnInit {
  constructor(public router: Router) {}
  ngOnInit() {}
  @Input() card!: Figurita

  handleClick() {
    this.router.navigate([
      '/detalle-figurita',
      this.card.props.idUsuario,
      this.card.props.id
    ])
  }
}
