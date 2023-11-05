import {UserService} from 'src/app/services/user-service/user.service'
import {Component, OnInit} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'app-profile-figus',
  templateUrl: './profile-figus.component.html',
  styleUrls: ['./profile-figus.component.css']
})
export class ProfileFigusComponent implements OnInit {
  constructor(public userService: UserService, private route: ActivatedRoute) {}
  async ngOnInit() {
    this.route.data.subscribe(async (data) => {
      this.listCards = await data['obtenerFigus'](this.userService)
    })
  }
  listCards!: Figurita[]
}
