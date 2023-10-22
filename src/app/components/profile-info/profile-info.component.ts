import {NgForm} from '@angular/forms'
import {criteria, locations} from './../../helpers/getOptionsInfoProfile'
import {Component} from '@angular/core'
import {ProfileInfoDTO} from 'src/app/dtos/user.dto'
import {provinces} from 'src/app/helpers/getOptionsInfoProfile'
import {profileInfoUserMock} from 'src/app/mocks/user.mock'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  profileInfo: ProfileInfoDTO = profileInfoUserMock
  provinces: string[] = provinces
  locations: string[] = locations
  criteria: string[] = criteria

  onSubmit(form: NgForm) {
    console.log(form.form.value)
  }
}
