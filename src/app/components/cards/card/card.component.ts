import {Component, EventEmitter, Input, Output} from '@angular/core'
import {Router} from '@angular/router'
import {FigusListType} from 'src/app/dtos/figurita.dto'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(public userService: UserService, private router: Router) {}
  @Input() card!: Figurita
  @Input() listCardType?: FigusListType  
  @Output() onClicked = new EventEmitter<Figurita>()

  emitOnClicked() {
    this.onClicked.emit(this.card)
  }
  
  getTestId() {
    return `card-${this.card.id}`
  }

  async handleDelete() {
    if (this.listCardType && this.card.isOwner) {
      try {
        await this.userService.deleteFigu(this.card.props.id, this.listCardType)
        const currentUrl = this.router.url
        this.router.navigateByUrl('/perfil').then(() => {
          this.router.navigate([currentUrl])
        })
        /* 
        Preguntar al profe por que no funciona de esta forma
        this.router.navigate([currentUrl], {
          onSameUrlNavigation: 'reload'
        }) */
      } catch (error) {
        alert('alerta por subnormal')
      }
    }
  }
}
