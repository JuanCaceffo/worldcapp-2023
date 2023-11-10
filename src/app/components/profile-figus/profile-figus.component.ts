import {UserService} from 'src/app/services/user-service/user.service'
import {Component, OnInit} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {ActivatedRoute} from '@angular/router'
import {DataProfileFigus} from 'src/app/app-routing.module'
import {USER_LAST_PROFILE_NAVIGATE_KEY} from 'src/app/helpers/userSessionStorage.helper'

@Component({
  selector: 'app-profile-figus',
  templateUrl: './profile-figus.component.html',
  styleUrls: ['./profile-figus.component.css']
})
export class ProfileFigusComponent implements OnInit {
  constructor(public userService: UserService, private route: ActivatedRoute) {}
  async ngOnInit() {
    this.route.data.subscribe((data) => {
      this.routeData = data as DataProfileFigus
    })
    await this.populateListCards()
    this.route.url.subscribe((url) => {
      const path = url.pop()?.path ?? 'perfil-usuario'
      sessionStorage.setItem(USER_LAST_PROFILE_NAVIGATE_KEY, path)
    })
  }
  listCards!: Figurita[]
  routeData!: DataProfileFigus

  async populateListCards() {
    this.listCards = await this.routeData.getFigus(this.userService)
  }

  async handelDelete(cardID: number) {
    try {
      await this.routeData.deleteFigu(this.userService, cardID)
      setTimeout(async () => {
        await this.populateListCards()
      }, 1)
    } catch (error) {
      alert('alerta por subnormal')
    }
  }
}
