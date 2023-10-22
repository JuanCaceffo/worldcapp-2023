import {Component, ElementRef, ViewChild} from '@angular/core'
import {ProfileInfoDTO} from 'src/app/dtos/user.dto'
import {profileInfoUserMock} from 'src/app/mocks/user.mock'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  @ViewChild('inputBirthdate') inputElement!: ElementRef

  //TODO: Ingresar desde el back al input la fecha y los selects
  profileInfo: ProfileInfoDTO = profileInfoUserMock
}
