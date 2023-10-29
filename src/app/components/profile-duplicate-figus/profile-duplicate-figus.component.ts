import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-profile-duplicate-figus',
  templateUrl: './profile-duplicate-figus.component.html',
  styleUrls: ['./profile-duplicate-figus.component.css']
})
export class ProfileDuplicateFigusComponent implements OnInit {
  constructor(public userService: UserService, private router: Router) {}

  async ngOnInit() {
    this.listDuplicateCards = await this.userService.getFiguritasList(
      'REPETIDAS'
    )
  }
  listDuplicateCards!: Figurita[]
}
