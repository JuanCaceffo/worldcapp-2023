import {NgForm} from '@angular/forms'
import {criteria, locations} from '../../helpers/getOptionsInfoProfile.helper'
import {Component} from '@angular/core'
import {ProfileInfoDTO} from 'src/app/dtos/user.dto'
import {provinces} from 'src/app/helpers/getOptionsInfoProfile.helper'
import {UserService} from 'src/app/services/user-service/user.service'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  constructor(private userService: UserService) {}
  profileInfo!: ProfileInfoDTO
  provinces: string[] = provinces
  locations: string[] = locations
  criteria: string[] = criteria

  async ngOnInit() {
    this.profileInfo = await this.userService.getProfileInfo()
  }

  async onSubmit(form: NgForm) {
    //TODO: Manejar errores
    console.log(form.form.errors)
    this.profileInfo = await this.userService.editProfileInfo(this.profileInfo)
  }
}
