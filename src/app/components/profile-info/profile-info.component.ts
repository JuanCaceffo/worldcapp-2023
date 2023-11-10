import {criteria} from '../../helpers/getOptionsInfoProfile.helper'
import {Component} from '@angular/core'
import {UserProfileInfoDTO, UserUpdateInfoDTO} from 'src/app/dtos/user.dto'
import {UserService} from 'src/app/services/user-service/user.service'
import {ProvinceService} from 'src/app/services/province-service/province.service'
import {ProvinceDTO} from 'src/app/dtos/province.dto'
import {initialProfileInfoUserMock} from 'src/app/mocks/user.mock'
import {NotifierService} from 'src/app/services/notifier-service/notifier.service'
import {USER_LAST_PROFILE_NAVIGATE_KEY} from 'src/app/helpers/userSessionStorage.helper'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  constructor(
    private userService: UserService,
    private provinceService: ProvinceService,
    private notifierService: NotifierService
  ) {}
  //Ingresar un mock con valores por defecto
  profileInfo: UserProfileInfoDTO = initialProfileInfoUserMock
  resetProfileInfo!: UserProfileInfoDTO
  provinces: ProvinceDTO[] = []
  locations: string[] = []
  criteria: string[] = criteria
  errors: string[] = []
  message: string = ''

  async ngOnInit() {
    try {
      this.profileInfo = await this.userService.getProfileInfo()
      this.saveLastProfile()
      this.provinces = await this.provinceService.getProvinces()
    } catch (e) {
      this.notifierService.notify(e, 'error')
    }
    sessionStorage.setItem(USER_LAST_PROFILE_NAVIGATE_KEY, 'perfil-usuario')
  }

  async onSubmit() {
    try {
      this.saveLastProfile()
      this.profileInfo = await this.userService.editProfileInfo(
        this.profileInfo
      )
      this.notifierService.notify(
        'Se edito el usuario correctamente',
        'success'
      )
    } catch (e) {
      this.notifierService.notify(e, 'error')
    }
  }

  onReset() {
    this.profileInfo = structuredClone(this.resetProfileInfo)

    const infoUser: UserUpdateInfoDTO = {
      location: this.profileInfo.address.localidad,
      age: new Date(this.profileInfo.birthdate)
    }

    this.userService.updateInfoUser(infoUser)
    this.notifierService.notify('Los datos fueron reestablecidos', 'alert')
  }

  getProvinces = (): string[] => this.provinces.map((data) => data.province)

  selectedProvince = (province: string): boolean =>
    province === this.profileInfo.address.provincia

  selectedLocation = (location: string): boolean =>
    location === this.profileInfo.address.localidad

  getLocations = (): string[] =>
    this.provinces.find((data) => this.selectedProvince(data.province))
      ?.locations ?? []

  updateInfoUser(birthDate: Date) {
    const infoUser: UserUpdateInfoDTO = {
      location: this.profileInfo.address.localidad,
      age: birthDate
    }
    this.userService.updateInfoUser(infoUser)
    this.notifierService.notify(
      'Se pudo generar una modificación en el perfil del usuario',
      'info'
    )
  }
  saveLastProfile() {
    this.resetProfileInfo = structuredClone(this.profileInfo)
  }
}
