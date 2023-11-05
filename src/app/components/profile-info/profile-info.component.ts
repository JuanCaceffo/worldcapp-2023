import {NgForm} from '@angular/forms'
import {criteria} from '../../helpers/getOptionsInfoProfile.helper'
import {Component} from '@angular/core'
import {UserProfileInfoDTO, UserUpdateInfoDTO} from 'src/app/dtos/user.dto'
import {UserService} from 'src/app/services/user-service/user.service'
import {ProvinceService} from 'src/app/services/province-service/province.service'
import {ProvinceDTO} from 'src/app/dtos/province.dto'
import {initialProfileInfoUserMock} from 'src/app/mocks/user.mock'
import {NotifierService} from 'src/app/services/notifier-service/notifier.service'

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent {
  constructor(
    private userService: UserService,
    private provinceService: ProvinceService,
    public notifierService: NotifierService
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
      this.resetProfileInfo = structuredClone(this.profileInfo)
      this.provinces = await this.provinceService.getProvinces()
    } catch (e) {
      // mostrarError(this, e)
      this.notifierService.notifiyError(e)
    }
  }

  async onSubmit(form: NgForm) {
    try {
      if (form.valid) {
        this.profileInfo = await this.userService.editProfileInfo(
          this.profileInfo
        )
        this.notifierService.notifySucess('Se edito el usuario correctamente')
      } else {
        // mostrarError(this, 'Complete todos los campos del formulario')
        this.notifierService.notifiyError(
          'Complete todos los campos del formulario'
        )
      }
    } catch (e) {
      // mostrarError(this, e)
      this.notifierService.notifiyError(e)
    }
  }

  onReset() {
    console.log(this.profileInfo.address.provincia)
    this.profileInfo = structuredClone(this.resetProfileInfo)
    // this.showMessage('Se reestableció el usuario exitosamente')
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
    try {
      this.userService.updateInfoUser(infoUser)
    } catch (e) {
      // mostrarError(this, e)
      this.notifierService.notifiyError(e)
    }
  }

  hasBackErrors() {
    return !!this.errors.length
  }
}
