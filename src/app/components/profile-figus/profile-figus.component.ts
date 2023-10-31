import {UserService} from 'src/app/services/user-service/user.service'
import {Component, OnInit} from '@angular/core'
import {Figurita} from 'src/app/models/cards/figurita.model'
import {ActivatedRoute} from '@angular/router'
import {FigusListType} from 'src/app/dtos/figurita.dto'

@Component({
  selector: 'app-profile-figus',
  templateUrl: './profile-figus.component.html',
  styleUrls: ['./profile-figus.component.css']
})
export class ProfileFigusComponent implements OnInit {
  constructor(public userService: UserService, private route: ActivatedRoute) {}
  async ngOnInit() {
    this.route.params.subscribe(async (param) => {
      this.figusListType = param['figus-list-type'] as FigusListType
      console.log(this.figusListType)

      this.listMissinCards = await this.userService.getFiguritasList(
        this.figusListType
      )
    })
  }
  figusListType!: FigusListType
  listMissinCards!: Figurita[]
}
