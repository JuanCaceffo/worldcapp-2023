import {UserService} from 'src/app/services/user-service/user.service'
import {Component, OnInit} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'

@Component({
  selector: 'app-profile-missing-figus',
  templateUrl: './profile-missing-figus.component.html',
  styleUrls: ['./profile-missing-figus.component.css']
})
export class ProfileMissingFigusComponent implements OnInit {
  constructor(public userService: UserService) {}
  async ngOnInit() {
    this.listMissinCards = await this.userService.getFiguritasList('FALTANTES')
  }
  listMissinCards!: Figurita[]
}
